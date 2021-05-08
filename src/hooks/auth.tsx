import React, { createContext, useCallback, useContext, useState } from 'react';

import { api } from '../services/http/api';

interface IAuthState {
  user_id: string;
  token: string;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  auth: IAuthState;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@SCHEDULES:token');
    const user_id = localStorage.getItem('@SCHEDULES:user_id');

    if (token && user_id) return { token, user_id };

    return {} as IAuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: ISignInCredentials): Promise<void> => {
      const {
        data: { token, user_id },
      } = await api.post('/session/signin', {
        email,
        password,
      });

      setAuthData({ token, user_id });

      api.defaults.headers.Authorization = `Bearer ${token}`;

      localStorage.setItem('@SCHEDULES:user_id', user_id);
      localStorage.setItem('@SCHEDULES:token', token);
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@SCHEDULES:user_id');
    localStorage.removeItem('@SCHEDULES:token');

    setAuthData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ auth: authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within and AuthProvider');

  return context;
};

export { AuthProvider, useAuth };
