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

    if (token && user_id) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user_id };
    }

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

      localStorage.setItem('@SCHEDULES:user_id', user_id);
      localStorage.setItem('@SCHEDULES:token', token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setAuthData({ token, user_id });
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@SCHEDULES:user_id');
    localStorage.removeItem('@SCHEDULES:token');

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
