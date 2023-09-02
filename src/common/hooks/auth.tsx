import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Context = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<Context>({} as Context);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const navigate = useNavigate();

  const login = (tkn: string) => {
    localStorage.setItem('token', tkn);
    setToken(tkn);
    navigate(`${import.meta.env.BASE_URL}/dashboard`, { replace: true });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate(`${import.meta.env.BASE_URL}/login`, { replace: true });
  };

  const value = useMemo(
    () => ({
      token,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
