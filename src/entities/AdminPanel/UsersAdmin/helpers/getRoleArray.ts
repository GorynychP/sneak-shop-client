import { UserRole } from '@/entities/User';
import { CheckboxItem } from '@/shared/ui/CheckboxGroup';

export const getRoleArray = (roles: CheckboxItem<UserRole>[]) => {
    const resultRoles: UserRole[] = [];

    roles.forEach((role) => {
        if (role.enabled) {
            resultRoles.push(role.type);
        }
    });
    return resultRoles;
};
