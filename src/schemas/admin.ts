import * as yup from "yup";
export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("first Name is Required"),
      lastName: yup.string().required("Last Name is Required"),
      middleName: yup.string().required("Middle Name is Required"),
    }),
    email: yup.string().email().required("Email is Requred"),
    designation: yup.string().required("Designation is Required"),
    dateOfBirth: yup.string().required("Date of Birth is Required"),
  }),
});

// {
//     "password": "1234567",
//     "admin": {
//          "name": {
//     "firstName": "kader",
//     "lastName": "khan",
//     "middleName": "ahmed"
//   },
//   "dateOfBirth": "1990-02-07",
//   "gender": "male",
//   "bloodGroup": "AB+",
//   "email": "mofassel23450@gmail.com",
//   "contactNo": "0185500556",
//   "emergencyContactNo": "01800000006",
//   "presentAddress": "asf",
//   "permanentAddress": "asdf",
//   "managementDepartment": "649b2068109a506c565b0f50",
//   "designation": "HR executive",
//   "profileImage": "https://via.placeholder.com/150x150"
//       }
// }
