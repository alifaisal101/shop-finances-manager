import { HttpException, HttpStatus } from '@nestjs/common';
import { errorLog, warnLog } from './log';

export const systemError = (warnMsg: string, err: Error): void => {
  warnLog(warnMsg);
  errorLog(err);
  process.exit(1);
};

export const internalErrorExceptionCatch = (err: Error) =>
  new HttpException(
    {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: err.message,
    },
    HttpStatus.INTERNAL_SERVER_ERROR,
    {
      cause: err,
    },
  );

export const badRequestExceptionCatch = (err: Error) =>
  new HttpException(
    {
      status: HttpStatus.BAD_REQUEST,
      error: err.message,
    },
    HttpStatus.BAD_REQUEST,
    {
      cause: err,
    },
  );
