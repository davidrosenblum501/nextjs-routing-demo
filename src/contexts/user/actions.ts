export enum UserActionType {
  LOGIN = 'user/LOGIN',
  LOGOUT = 'user/LOGOUT',
}

export type UserAction =
  | ReturnType<typeof login>
  | ReturnType<typeof logout>;

export const login = (email: string) => ({
  type: UserActionType.LOGIN as const,
  email
});

export const logout = () => ({
  type: UserActionType.LOGOUT as const,
});