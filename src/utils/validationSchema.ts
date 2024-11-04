import * as yup from 'yup';

export const personalInfoSchema = yup.object().shape({
  name: yup.string().required("Name is required").typeError('Input must be a string'),
  mobile: yup.string().required("Mobile number is required").matches(/^(?:\+91[-\s]?|0)?\d{10}$/, 'Enter exactly 10 digits'),
  bankName: yup.string().required("Bank name is required").typeError('Input must be a string'),
  ifscCode: yup.string().required("IFSC code is required").typeError('Input must be a string'),
  accountNumber: yup.number().required("Account number is required").typeError('Input must be a number'),
  upiId: yup.string().required("upi Id is required").typeError('Input must be a string'),
  vehicleDetails: yup.string().required("Vehicle details is required").typeError('Input must be a string'),
  // country: yup.string().required("Country is required").typeError('Input must be a string'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
})

export const editProfileSchema = yup.object().shape({
  name: yup.string().required("Name is required").typeError('Input must be a string'),
  // lastname: yup.string().required("Last Name is required").typeError('Input must be a string'),
  email: yup.string().email('Invalid email').required('Email is required'),
  // mobile: yup.string().required("Mobile number is required").matches(/^(\+91-|\+91|0)?\d{10}$/, 'Enter exactly 10 digits'),
})