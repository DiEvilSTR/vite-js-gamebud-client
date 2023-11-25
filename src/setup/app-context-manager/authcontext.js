// import { createContext, useState, useContext } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [token, setToken] = useState(null);

//     const login = (token) => {
//         setIsAuthenticated(true);
//         setToken(token);
//     };

//     const logout = () => {
//         setIsAuthenticated(false);
//         setToken(null);
//     };

//     // Add logic to manage authentication here

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
//             { children }
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);
