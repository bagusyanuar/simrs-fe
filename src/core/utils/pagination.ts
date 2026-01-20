export interface PaginatedResult<T> {
  items: T[];
  total: number;
  currentPage: number;
  perPage: number;
}

export interface QueryPagination {
  page?: number;
  pageSize?: number;
}