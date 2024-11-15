export type { I_User } from './model/types/user';
export { UserRole } from './model/types/user';
export { userActions, userSlice } from './model/slice/userSlice';
export {
    selectUserAuthInited,
    selectUserData,
    selectIsUserAdmin,
    selectIsUserManager,
} from './model/slice/userSlice';
export { userService } from './services/user.service';

export { useUser } from './api/hooks/useUser';
