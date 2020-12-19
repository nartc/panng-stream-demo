export type ApiResponseStatus = 'loading' | 'success' | 'failure';

export interface ApiResponse<T> {
  data: T | null;
  error: string;
  status: ApiResponseStatus;
}

export interface SuccessApiResponse<T> extends ApiResponse<T> {
  status: 'success';
  data: T;
  error: '';
}

export interface FailureApiResponse<T> extends ApiResponse<T> {
  status: 'failure';
}
