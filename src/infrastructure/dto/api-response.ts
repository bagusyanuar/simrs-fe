export interface APIResponse<T> {
  code: number;
  message: string;
  data?: T;
  meta?: {
    pagination?: MetaPagination;
  };
}

export interface MetaPagination {
  page: number;
  per_page: number;
  total_rows: number;
}

export interface APIError<T> {
  message: string;
  error: {
    code: number;
    details: T;
  };
}
