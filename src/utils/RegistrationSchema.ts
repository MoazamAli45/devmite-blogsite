import * as yup from 'yup';

const RegistrationSchema = yup.object().shape({
    FirstName: yup
        .string()
        .min(3, 'Fisrt name should be at least 3 characters long')
        .required('FisrtName is required'),

    LastName: yup
        .string()
        .min(2, 'Last name should be at least 2 characters long')
        .required('LastName is required'),

    email: yup.string().email().required('Email is required'),

    password: yup
        .string()
        .min(8, 'Password should be at least 8 characters long')
        .required('Password is required'),
});

export default RegistrationSchema;
