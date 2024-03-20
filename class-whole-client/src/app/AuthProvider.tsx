import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface IActions{
    logout: () => void,
    login: (user: any) => void,
    user: {
        permissions: any[],
        username: string
    }
}

const AuthContext = createContext< IActions | null >(null);
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/profile";

    const [user, setUser] = useState({
        username: "",
        permissions: [],
    });

    const login = (user) => {
        if (user === "teacher") {
            setUser({ username: user, permissions: ["teacher"] });
        } else if (user === "pupil"){
            setUser({ username: user, permissions: ["pupil"] });
        } else {
            navigate(redirectPath, { replace: true });
        }

    };
    const logout = () => {
        setUser({ username: "", permissions: [] });
    };
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
    return useContext(AuthContext);
};