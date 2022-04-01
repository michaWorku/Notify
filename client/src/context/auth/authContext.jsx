import { createContext, FC, useContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem('user')) || null,
};


const AuthContext = createContext({
  state: initialState
});

export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(authReducer, initialState);

    return ( 
      <AuthContext.Provider 
            value={{ state, dispatch }}>
        {children}
      </AuthContext.Provider>)
}

export const useAuthContext = () => useContext(AuthContext) 