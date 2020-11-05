import React, { Dispatch, createContext, useContext, useReducer } from 'react';
import { UserAction } from './actions';
import userReducer, { IUserState, defaultState as defaultUserState } from './reducer';

export type UserContentType = [
  IUserState,
  Dispatch<UserAction>,
];

export const UserContext = createContext<UserContentType>([
  defaultUserState,
  () => undefined,
]);

export const UserContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, defaultUserState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

export const withProvider = <P extends {}>(Component: React.ComponentType<P>): React.FC<P> => {
  return (props): JSX.Element => (
    <UserContextProvider>
      <Component {...props} />
    </UserContextProvider>
  );
};

const useUserContext = (): UserContentType => useContext(UserContext);

export default useUserContext;