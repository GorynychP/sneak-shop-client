import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
    email: yup
        .string()
        .required('Заполнить email')
        .min(6, 'Неверный email. Минимум 6 символа')
        .max(35, 'Неверный email. Максимум 35 символов'),
    password: yup
        .string()
        .required('Заполнить пароль')
        .matches(/^[\w#%/]+/, 'Неверный пароль. Допускаются буквы, цифры и знаки # %')
        .min(6, 'Неверный заполнен пароль. Минимум 6 символов')
        .max(30, 'Неверный заполнен пароль. Максимум 30 символов'),
});

export type LoginFormSchema = yup.InferType<typeof loginFormSchema>;
