export interface StringSearchIn {
  searchString: string;
  searchType: 'startsWith' | 'endsWith' | 'includes' | 'notIncludes' | 'equals';
}

export interface DateSearchIn {
  startDate: Date;
  endDate: Date;
  searchType: 'equals' | 'inBetween' | 'outside';
}
