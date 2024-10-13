export type { I_User } from './model/types/user';
export { UserRole } from './model/types/user';
export { useProfile } from './model/hooks/useProfile/useProfile';
export { userActions, userSlice } from './model/slice/userSlice';
export {
    selectUserAuthInited,
    selectUserData,
    selectIsUserAdmin,
    selectIsUserManager,
} from './model/slice/userSlice';
