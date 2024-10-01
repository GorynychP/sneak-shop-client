import { memo } from 'react';
import clsx from 'clsx';
import cls from './RegisterForm.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { regFormSchema, RegFormSchema } from '../../lib/formSchema/regFormSchema';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';

interface RegisterFormProps {
    className?: string;
}

export const RegisterForm = memo(({ className }: RegisterFormProps) => {
    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm<RegFormSchema>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            passCheck: '',
        },
        resolver: yupResolver(regFormSchema),
    });
    const onSubmitHandler = ({ name, email, password }: RegFormSchema) => {
        console.log(name, email, password);
    };
    const errorMessageName = errors?.name?.message;
    const errorMessageEmail = errors?.email?.message;
    const errorMessagePassword = errors?.password?.message;
    const errorMessagePassCheck = errors?.passCheck?.message;

    const errorMessage =
        errorMessageName || errorMessageEmail || errorMessagePassword || errorMessagePassCheck;

    return (
        <div className={clsx(cls.RegisterForm, [className])}>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <VStack gap="16" align="center">
                    <VStack className="field" gap="8" max>
                        <input
                            type="text"
                            className="field__input"
                            placeholder="Имя"
                            {...register('name', {
                                onChange: () => setError('name', { message: '' }),
                            })}
                        />
                        {errorMessageName && <p className="field__text">{errors?.name?.message}</p>}
                    </VStack>
                    <VStack className="field" gap="8" max>
                        <input
                            type="email"
                            className="field__input"
                            placeholder="Email"
                            {...register('email', {
                                onChange: () => setError('email', { message: '' }),
                            })}
                        />
                        {errorMessageEmail && <p className="field__text">{errors?.email?.message}</p>}
                    </VStack>
                    <VStack className="field" gap="8" max>
                        <input
                            type="password"
                            className="field__input"
                            placeholder="Пароль"
                            {...register('password', {
                                onChange: () => setError('password', { message: '' }),
                            })}
                        />
                        {errorMessagePassword && <p className="field__text">{errors?.password?.message}</p>}
                    </VStack>
                    <VStack className="field" gap="8" max>
                        <input
                            type="password"
                            className="field__input"
                            placeholder="Повтор пароля"
                            {...register('passCheck', {
                                onChange: () => setError('passCheck', { message: '' }),
                            })}
                        />
                        {errorMessagePassCheck && <p className="field__text">{errors?.passCheck?.message}</p>}
                    </VStack>
                </VStack>
                <Button disabled={!!errorMessage} type="submit" theme="accent_button">
                    Зарегистрироваться
                </Button>
            </form>
        </div>
    );
});
