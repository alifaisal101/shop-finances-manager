import { Types } from 'mongoose';

export interface StringSearchIn {
  searchString: string;
  searchType: 'startsWith' | 'endsWith' | 'includes' | 'notIncludes' | 'equals';
}

export interface DateSearchIn {
  startDate: Date;
  endDate: Date;
  searchType: 'equals' | 'inBetween' | 'outside';
}

export interface ObjectIdIn {
  searchString: Types.ObjectId;
  searchType: 'equals' | 'unEquals';
}

export interface SearchQueryIn {
  [key: string]: ObjectIdIn | StringSearchIn | DateSearchIn;
}
