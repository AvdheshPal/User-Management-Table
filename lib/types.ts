export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type SortDirection = 'asc' | 'desc';

export interface QueryParams {
  page?: number;
  search?: string;
  sortBy?: string;
  sortDirection?: SortDirection;
}