 
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('attrybToken') || '');

  const login = (newToken,userID) => {
    setToken(newToken);
    localStorage.setItem('attrybToken', newToken);
    localStorage.setItem('attrybUserID',userID);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('attrybToken');
    localStorage.removeItem('attrybUserID');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
