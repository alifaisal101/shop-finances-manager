// This function creates a mongoose session, to achieve an "all-or-nothing"
// insertion for documents, to prevent any kind of errors.

import { InternalServerErrorException } from '@nestjs/common';
import mongoose, { Connection, FilterQuery, Model, Types } from 'mongoose';
import {
  DateSearchIn,
  SearchQueryIn,
  StringSearchIn,
} from 'src/types/search-query';

// Deprecated due to requiring a replica set.
// export const insertMany = async (
//   records: Record<string, any>[],
//   Model: Model<any>,
//   connection: Connection,
// ) => {
//   const session = await connection.startSession();
//   session.startTransaction();

//   try {
//     const results = [];

//     for (const record of records) {
//       const model = new Model(record);
//       const result = await model.save({ session });
//       results.push(result);
//     }

//     await session.commitTransaction();
//     session.endSession();

//     return results;
//   } catch (err) {
//     console.log(err);
//     await session.abortTransaction();
//     session.endSession();
//     throw err;
//   }
// };
// // Deprecated due to requiring a replica set.
// export const updateManyRecords = async (
//   records: Record<string, any>[],
//   Model: Model<any>,
// ) => {
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     const results = [];

//     for (const record of records) {
//       const result = await Model.findByIdAndUpdate(
//         record._id,
//         { $set: record },
//         { session },
//       );
//       results.push(result);
//       if (result.modifiedCount !== 1) {
//         throw new Error(`Failed to update: ${record._id}`);
//       }
//     }

//     await session.commitTransaction();
//     session.endSession();
//     return results;
//   } catch (err) {
//     await session.abortTransaction();
//     session.endSession();
//     throw err;
//   }
// };

export const insertMany = async (
  records: Record<string, any>[],
  Model: Model<any>,
) => {
  const results = [];

  try {
    for (const record of records) {
      const model = new Model(record);
      const result = await model.save();
      results.push(result);
    }

    return results;
  } catch (err) {
    console.log(err);
    // Rollback any records that were inserted
    await rollbackCreatedRecord(results);
    throw err;
  }
};

const rollbackCreatedRecord = async (results: any[]) => {
  for (const result of results) {
    await result.deleteOne();
  }
};

export const updateManyRecords = async (
  records: Record<string, any>[],
  Model: Model<any>,
) => {
  let originalStates = [];
  const results = [];

  try {
    for (const record of records) {
      const originalDocument = await Model.findById(record._id);
      const result = await Model.updateOne({ _id: record._id }, record);
      originalStates.push(originalDocument);
      results.push(result);
    }
  } catch (err) {
    // Rollback updates by reverting documents to their original state
    await rollbackUpdatedDocuments(originalStates, Model);
    throw err;
  }
};

const rollbackUpdatedDocuments = async (
  originalStates: any[],
  Model: Model<any>,
) => {
  try {
    // Rollback updates by reverting documents to their original state
    for (const originalState of originalStates) {
      await Model.updateOne({ _id: originalState._id }, originalState);
    }
  } catch (err) {
    throw err;
  }
};

export const filterQueryBuilder = (searchQuery: SearchQueryIn) => {
  console.log(searchQuery);
  const filterObj: FilterQuery<any> = {};

  // Process each field in the search query
  Object.entries(searchQuery).forEach(([fieldName, searchIn]) => {
    if (searchIn) {
      switch (fieldName) {
        case 'createdAt':
        case 'updatedAt':
          filterObj[fieldName] = buildDateFilter(searchIn as DateSearchIn);
          break;
        default:
          filterObj[fieldName] = buildStringFilter(searchIn as StringSearchIn);
          break;
      }
    }
  });

  return filterObj;
};

// Function to build string filter
const buildStringFilter = (
  stringSearchIn: StringSearchIn,
): FilterQuery<any> => {
  const { searchString, searchType } = stringSearchIn;
  switch (searchType) {
    case 'startsWith':
      return { $regex: `^${searchString}`, $options: 'i' };
    case 'endsWith':
      return { $regex: `${searchString}$`, $options: 'i' };
    case 'includes':
      return { $regex: searchString, $options: 'i' };
    case 'notIncludes':
      return { $not: { $regex: searchString, $options: 'i' } };
    case 'equals':
      return { $eq: searchString };
    default:
      throw new Error('Invalid search type for string');
  }
};

// Function to build date filter
const buildDateFilter = (dateSearchIn: DateSearchIn): FilterQuery<Date> => {
  const { startDate, endDate, searchType } = dateSearchIn;
  switch (searchType) {
    case 'equals':
      return { $eq: startDate };
    case 'inBetween':
      return { $gte: startDate, $lte: endDate };
    case 'outside':
      return { $lt: startDate, $gt: endDate };
    default:
      throw new Error('Invalid search type for date');
  }
};
