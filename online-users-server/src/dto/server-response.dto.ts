export interface ServerResponse<T> {
  Success: boolean;
  Data: T;
  ErrorCode: string;
  ErrorMessage: string;
}
