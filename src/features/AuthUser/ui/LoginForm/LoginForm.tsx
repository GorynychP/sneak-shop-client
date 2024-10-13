import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema, loginFormSchema } from '../../lib/formSchema/loginFormSchema';
import { VStack } from '@/shared/ui/Stack';
import clsx from 'clsx';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { useAuthForm } from '../../lib/hooks/useAuthForm';

interface LoginFormProps {
    className?: string;
    onClick: () => void;
}

export const LoginForm = memo(({ className, onClick }: LoginFormProps) => {
    const { onSubmit } = useAuthForm(false, onClick);
    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormSchema>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(loginFormSchema),
    });
    // const onSubmitHandler = ({ email, password }: LoginFormSchema) => {
    //     onClick();
    //     console.log(email, password);
    // };
    const errorMessageEmail = errors?.email?.message;
    const errorMessagePassword = errors?.password?.message;
    const errorMessage = errors?.email?.message || errors?.password?.message;
    return (
        <div className={clsx(cls.LoginForm, [className])}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack gap="16" align="center" max>
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
                </VStack>
                <Button disabled={!!errorMessage} type="submit" theme="accent_button">
                    Войти
                </Button>
            </form>
        </div>
    );
});
