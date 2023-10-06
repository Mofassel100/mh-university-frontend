import { number } from "yup";

export type IMeta = {
  page?: number;
  limit?: number;
  size?: number;
  total?: number;
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
export interface IDepartment {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
