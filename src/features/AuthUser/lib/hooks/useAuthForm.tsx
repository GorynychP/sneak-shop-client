import { SubmitHandler } from 'react-hook-form';
import { LoginFormSchema } from '../formSchema/loginFormSchema';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { RegFormSchema } from '../formSchema/regFormSchema';
import { authService } from '../../services/auth.service';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getRouteMain } from '@/shared/constants/router';
import { AxiosError } from 'axios';
import { useAppDispatch } from '@/shared/model';
import { I_User, userActions } from '@/entities/User';

type AuthFormData<T extends boolean> = T extends true ? RegFormSchema : LoginFormSchema;
interface ErrorResponse {
    message: string;
    statusCode: number;
}
export const useAuthForm = (isReg: boolean, onClick: () => void) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const register = (data: RegFormSchema) => authService.register(data);
    const login = (data: LoginFormSchema) => authService.login(data);

    const {
        mutate,
        isPending,
        error,
    }: UseMutationResult<I_User, AxiosError<ErrorResponse>, RegFormSchema | LoginFormSchema> = useMutation({
        mutationKey: ['auth user'],
        mutationFn: (data: RegFormSchema | LoginFormSchema) => {
            return isReg ? register(data as RegFormSchema) : login(data as LoginFormSchema);
        },

        onSuccess: (data) => {
            onClick();
            dispatch(userActions.setAuthData(data));
            toast.success(isReg ? 'Успешная регистрация' : 'Успешная авторизация');
            navigate(getRouteMain());
        },
        onError(error) {
            if (error.message) {
                toast.error(error.response?.data.message as string);
            } else {
                toast.error(isReg ? 'Успешная регистрация' : 'Успешная авторизация');
            }
        },
    });
    const onSubmit: SubmitHandler<AuthFormData<typeof isReg>> = (data) => {
        mutate(data);
    };

    return { onSubmit, isPending, error };
};
