export type IMeta = {
  page: number;
  limit: number;
  size: number;
};
export type ResponseSuccess = {
  data: any;
  meta: IMeta;
};
export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
