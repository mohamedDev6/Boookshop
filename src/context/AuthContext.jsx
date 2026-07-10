import { useState } from "react";
import { authContext } from "./useAuth";

export function AuthProvider({ children }) {
    const [token, setTokenState] = useState(localStorage.getItem("token"));

    function setToken(token) {
        setTokenState(token);

        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }

    return <authContext.Provider value={{ token, setToken }}>{children}</authContext.Provider>;
}
