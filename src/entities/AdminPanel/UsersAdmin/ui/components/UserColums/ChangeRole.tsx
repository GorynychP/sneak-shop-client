import { memo, useEffect, useState } from 'react';
import { CheckboxGroup, CheckboxItem } from '@/shared/ui/CheckboxGroup';
import { UserRole } from '@/entities/User';
import { useChangeRoles } from '../../../api/hooks/useChangeRoles';

interface ChangeRoleProps {
    rights: UserRole[];
    userId: string;
}
const rolesInitial: CheckboxItem<UserRole>[] = [
    { id: 1, name: 'Админ', enabled: false, type: UserRole.ADMIN, disabled: true },
    { id: 2, name: 'Менеджер', enabled: false, type: UserRole.MANAGER, disabled: false },
    { id: 3, name: 'Пользователь', enabled: false, type: UserRole.USER, disabled: false },
];
export const ChangeRole = memo(({ rights, userId }: ChangeRoleProps) => {
    const [roles, setRoles] = useState<CheckboxItem[]>(rolesInitial);
    useChangeRoles(roles, userId);

    useEffect(() => {
        setRoles((prev) => {
            return prev.map((item) => {
                return {
                    ...item,
                    enabled: rights.includes(item.type as UserRole),
                };
            });
        });
    }, [rights]);

    return <CheckboxGroup items={roles} setItems={setRoles} />;
});
