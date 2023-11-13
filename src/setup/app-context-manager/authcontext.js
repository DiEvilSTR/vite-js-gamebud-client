// import { createContext, useState, useContext } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Add logic to manage authentication here

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//       { children }
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);