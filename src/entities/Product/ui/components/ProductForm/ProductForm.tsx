import { I_Product, I_ProductInput } from '../../../model/types/product';
import { ChevronDown, Trash } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/shared/ui/Button';
import { ImageUpload } from '../FormElements/ImageUpload/ImageUpload';
import { useCreateProduct } from '../../../lib/hooks/useCreateProduct';
import { useUpdateProduct } from '../../../lib/hooks/useUpdateProduct';
import { useDeleteProduct } from '../../../lib/hooks/useDeleteProduct';
import { createFormSchema, CreateFormSchema } from '../../../lib/formSchema/createFormSchema';
import clsx from 'clsx';
import cls from './ProductForm.module.scss';
import { FormField, FormItem, Form, FormMessage } from '@/shared/ui/Form';
import { Input } from '@/shared/ui/Input';
import { ListBox } from '@/shared/ui/Popups';
import { SizesInput } from '@/shared/ui/SizesInput';

interface ProductFormProps {
    product?: I_Product;
}

export function ProductForm({ product }: ProductFormProps) {
    const { createProduct, isLoadingCreate } = useCreateProduct();
    const { updateProduct, isLoadingUpdate } = useUpdateProduct();
    const { deleteProduct, isLoadingDelete } = useDeleteProduct();

    const title = product ? 'Изменить данные' : 'Создать товар';
    const description = product ? 'Изменить данные о товаре' : 'Добавить новый товар в магазин';
    const action = product ? 'Сохранить' : 'Создать';

    const form = useForm<CreateFormSchema>({
        mode: 'onSubmit',
        values: {
            title: product?.title || '',
            description: product?.description || '',
            images: product?.images || [],
            price: product?.price ?? 0,
            sizes: product?.sizes || [],
            discount: product?.discount ?? 0,
            gender: product?.gender || 'UNISEX',
        },
        resolver: yupResolver(createFormSchema),
    });

    const handleDelete = () => {
        const confirmed = confirm('Вы уверены, что хотите удалить продукт?');
        if (confirmed) {
            try {
                deleteProduct('');
            } catch (error) {
                console.error('Ошибка при удалении продукта:', error);
            }
        }
    };

    const onSubmit: SubmitHandler<I_ProductInput> = (data) => {
        if (product) updateProduct(data);
        else createProduct(data);
    };
    // console.log(form.formState);
    // console.log(form.getValues());
    return (
        <div className={clsx(cls.FormWrapper)}>
            <div className={cls.header}>
                <div>
                    <h3 className={cls.title} title={title}>
                        {title}
                    </h3>
                    <p className={cls.description}>{description}</p>
                </div>
                {product && (
                    <Button onClick={handleDelete} theme="outline_cancel" disabled={isLoadingDelete}>
                        Удалить товар
                        <Trash className="size-4" />
                    </Button>
                )}
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        name="images"
                        render={({ field }) => (
                            <FormItem className={cls.FormItemImage}>
                                <ImageUpload
                                    isDisabled={isLoadingCreate || isLoadingUpdate}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                                <FormMessage className={cls.formMessage} />
                            </FormItem>
                        )}
                    />

                    <div className={cls.fields}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className={cls.FormItem}>
                                    <h3>Название</h3>
                                    <Input
                                        autofocus
                                        placeholder="Название товара"
                                        disabled={isLoadingCreate || isLoadingUpdate}
                                        {...field}
                                    />
                                    <FormMessage className={cls.formMessage} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem className={cls.FormItem}>
                                    <h3>Цена</h3>

                                    <Input
                                        placeholder="Цена товара"
                                        type="number"
                                        disabled={isLoadingCreate || isLoadingUpdate}
                                        {...field}
                                        value={+field.value === 0 ? '' : field.value}
                                        onChange={(e) => {
                                            field.onChange(e.target.value.trim());
                                        }}
                                    />
                                    <FormMessage className={cls.formMessage} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="discount"
                            render={({ field }) => (
                                <FormItem className={cls.FormItem}>
                                    <h3>Скидка</h3>

                                    <Input
                                        placeholder="Скидка в процентах"
                                        type="number"
                                        disabled={isLoadingCreate || isLoadingUpdate}
                                        {...field}
                                        value={+field.value === 0 ? '' : field.value}
                                    />
                                    <FormMessage className={cls.formMessage} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="sizes"
                            render={({ field }) => (
                                <FormItem className={cls.FormItem}>
                                    <h3>Размеры</h3>
                                    <SizesInput value={field.value} onChange={field.onChange} />
                                    <FormMessage className={cls.formMessage} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem className={cls.FormItem}>
                                    <h3>Пол</h3>
                                    <ListBox
                                        className={clsx(cls.ListBox, {})}
                                        items={[
                                            { value: 'MALE', content: 'Мужской' },
                                            { value: 'FEMALE', content: 'Женский' },
                                            { value: 'UNISEX', content: 'Унисекс' },
                                        ]}
                                        value={field.value}
                                        onChange={field.onChange}
                                        defaultValue="Унисекс"
                                        direction="bottom left"
                                        addonRight={<ChevronDown />}
                                    />

                                    <FormMessage className={cls.formMessage} />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className={cls.FormItemDescription}>
                                <h3>Описание</h3>
                                <textarea
                                    spellCheck={true}
                                    className={cls.descriptionField}
                                    placeholder="Описание магазина"
                                    disabled={isLoadingCreate || isLoadingUpdate}
                                    {...field}
                                />
                                <FormMessage className={cls.formMessage} />
                            </FormItem>
                        )}
                    />

                    <Button
                        className={cls.SubmitButton}
                        type="submit"
                        theme="accent_button"
                        disabled={isLoadingCreate || isLoadingUpdate}
                    >
                        {action}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
