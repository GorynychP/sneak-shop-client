import * as yup from 'yup';
import { T_Gender } from '../../model/types/product';

export const createFormSchema = yup.object().shape({
    title: yup
        .string()
        .required('Заполните название товара')
        .min(2, 'Название должно содержать минимум 2 символа')
        .max(35, 'Название должно содержать максимум 35 символов'),
    images: yup
        .array()
        .of(yup.string())
        .min(1, 'Добавьте хотя бы одно изображение')
        .required('Добавьте изображения товара'),
    gender: yup
        .mixed<T_Gender>()
        .oneOf(['FEMALE', 'MALE', 'UNISEX'], 'Неверный выбор категории пола')
        .required('Выберите категорию пола'),
    description: yup
        .string()
        .required('Заполните описание товара')
        .min(6, 'Описание должно содержать минимум 6 символов'),
    sizes: yup
        .array()
        .of(
            yup
                .number()
                .positive('Размер должен быть положительным числом')
                .integer('Размер должен быть целым числом')
                .required('Выберите хотя бы один размер'),
        )
        .min(1, 'Выберите хотя бы один размер')
        .required('Выберите хотя бы один размер')
        // .of(
        //     yup
        //         .number()
        //         .positive('Размер должен быть положительным числом')
        //         .integer('Размер должен быть целым числом'),
        // )
        .optional(),
    price: yup
        .number()
        .required('Укажите цену товара')
        .typeError('Цена должна быть числом')
        .positive('Цена должна быть положительным числом'),
    discount: yup
        .number()
        .required('Укажите скидку товара')
        .typeError('Скидка должна быть числом')
        .min(0, 'Скидка не может быть меньше 0')
        .max(100, 'Скидка не может превышать 100'),
});

export type CreateFormSchema = yup.InferType<typeof createFormSchema>;
