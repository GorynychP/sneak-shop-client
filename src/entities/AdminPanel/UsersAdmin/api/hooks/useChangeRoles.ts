import { CheckboxItem } from '@/shared/ui/CheckboxGroup';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { userAdminService } from '../../services/usersAdmin.service';
import { getRoleArray } from '../../helpers/getRoleArray';
import { UserRole } from '@/entities/User';
import toast from 'react-hot-toast';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

export const useChangeRoles = (rolesItems: CheckboxItem[], userId: string) => {
    const debounceRoles = useDebounce(rolesItems, 2000);
    const isFirstRender = useRef(true);
    const [hasDebouncedOnce, setHasDebouncedOnce] = useState(false);
    const { mutate: changeRoles } = useMutation({
        mutationFn: (roles: UserRole[]) => {
            return userAdminService.changeRole(userId, roles);
        },
        onSuccess: () => {
            toast.success('Роли успешно изменены');
        },
        onError: () => {
            toast.error('Не удалось изменить роли');
        },
    });

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (!hasDebouncedOnce) {
            setHasDebouncedOnce(true);
            return;
        }

        const roles = getRoleArray(debounceRoles as CheckboxItem<UserRole>[]);
        changeRoles(roles);
    }, [debounceRoles, changeRoles]);

    return { changeRoles };
};
