import { UserAction, UserActionType } from './actions';

export interface IUserState {
  email?: string;
  isLoggedIn: boolean;
}

export const defaultState: IUserState = {
  email: undefined,
  isLoggedIn: false,
};

const reducer = (state = defaultState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionType.LOGIN:
      return { ...state, email: action.email };

    case UserActionType.LOGOUT:
      return defaultState;

    default:
      return state;
  }
};

export default reducer;