import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { api } from '../services/http/api';

interface IAuthState {
  user_id: string;
  token: string;
  refresh_token: string;
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
    const refresh_token = localStorage.getItem('@SCHEDULES:refresh_token');

    if (token && user_id && refresh_token) {
      return { token, user_id, refresh_token };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: ISignInCredentials): Promise<void> => {
      const {
        data: { token, user_id, refresh_token },
      } = await api.post<IAuthState>('/session/signin', {
        email,
        password,
      });

      localStorage.setItem('@SCHEDULES:user_id', user_id);
      localStorage.setItem('@SCHEDULES:token', token);
      localStorage.setItem('@SCHEDULES:refresh_token', refresh_token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setAuthData({ token, user_id, refresh_token });
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@SCHEDULES:user_id');
    localStorage.removeItem('@SCHEDULES:token');
    localStorage.removeItem('@SCHEDULES:refresh_token');

    setAuthData({} as IAuthState);
  }, []);

  const providerValues = useMemo(() => ({ auth: authData, signIn, signOut }), [
    authData,
    signIn,
    signOut,
  ]);

  return (
    <AuthContext.Provider value={{ ...providerValues }}>
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
