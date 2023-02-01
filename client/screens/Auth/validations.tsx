import * as yup from 'yup';
import { fieldNames } from './enumerations';

export const signInValidationSchema = yup.object().shape({  
  [fieldNames.email]: yup
    .string()
    .email()
    .required('Please Enter your email'),
});
export const signUpValidationSchema = yup.object().shape({
   [fieldNames.email]: yup
    .string()
    .email()
    .required('Please Enter your email'),
  [fieldNames.userName]: yup
    .string()
    .max(30, 'Name is too long')
    .matches(/[A-Za-z]/g, 'Please use latin characters')
    .required('Please Enter your name'),
    [fieldNames.userLastName]: yup
    .string()
    .max(30, 'Name is too long')
    .matches(/[A-Za-z]/g, 'Please use latin characters')
    .required('Please Enter your name'),
});
