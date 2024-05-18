// This function creates a mongoose session, to achieve an "all-or-nothing"
// insertion for documents, to prevent any kind of errors.

import { InternalServerErrorException } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';

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
    throw new InternalServerErrorException();
  }
};

export const updateMany = async (
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
    throw new InternalServerErrorException();
  }
};
