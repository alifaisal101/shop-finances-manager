// This function creates a mongoose session, to achieve an "all-or-nothing"
// insertion for documents, to prevent any kind of errors.

import { InternalServerErrorException } from '@nestjs/common';
import mongoose, { FilterQuery, Model } from 'mongoose';
import {
  DateSearchIn,
  SearchQueryIn,
  StringSearchIn,
} from 'src/types/search-query';

export const insertMany = async (
  records: Record<string, any>[],
  Model: Model<any>,
) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const results = [];

    for (const record of records) {
      const model = new Model(record);
      const result = await model.save({ session });
      results.push(result);
    }

    await session.commitTransaction();
    session.endSession();
    return results;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};

export const updateManyRecords = async (
  records: Record<string, any>[],
  Model: Model<any>,
) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const results = [];

    for (const record of records) {
      const result = await Model.findByIdAndUpdate(
        record._id,
        { $set: record },
        { session },
      );
      results.push(result);
      if (result.modifiedCount !== 1) {
        throw new Error(`Failed to update: ${record._id}`);
      }
    }

    await session.commitTransaction();
    session.endSession();
    return results;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
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
function buildStringFilter(stringSearchIn: StringSearchIn): FilterQuery<any> {
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
}

// Function to build date filter
function buildDateFilter(dateSearchIn: DateSearchIn): FilterQuery<Date> {
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
}
