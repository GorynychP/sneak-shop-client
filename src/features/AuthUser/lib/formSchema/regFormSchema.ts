import * as yup from 'yup';

export const regFormSchema = yup.object().shape({
    name: yup
        .string()
        .required('Заполнить Имя')
        .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, 'Неверный формат Имени. Допускаются только буквы')
        .min(2, 'Неверный Имя. Минимум 2 символа')
        .max(25, 'Неверный Имя. Максимум 25 символов'),
    email: yup
        .string()
        .required('Заполнить email')
        // .matches(/^\w+$/, 'Неверный email. Допускаются только буквы и цифры')
        .matches(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            'Неверный формат email. Пример: test@example.com',
        )
        .min(6, 'Неверный email. Минимум 6 символа')
        .max(35, 'Неверный email. Максимум 35 символов'),
    password: yup
        .string()
        .required('Заполнить пароль')
        .matches(/^[\w#%/]+/, 'Неверный пароль. Допускаются буквы, цифры и знаки # %')
        .min(6, 'Неверный заполнен пароль. Минимум 6 символа')
        .max(20, 'Неверный заполнен пароль. Максимум 20 символов'),
    passCheck: yup
        .string()
        .required('Заполнить повтор пароль')
        .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export type RegFormSchema = yup.InferType<typeof regFormSchema>;
