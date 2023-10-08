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
export interface IFaculties {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IAcademicDepartment {
  id: string;
  title: string;
  academicFaculty?: IFaculties;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface Name {
  firstName: string;
  lastName: string;
  middleName: string;
}

export interface IAdmin {
  id: string;
  name: Name;
  gender: string;
  managementDepartment: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  dateOfBirth: string;
  bloodGroup: string;
  designation: string;
  presentAddress: string;
  permanentAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
