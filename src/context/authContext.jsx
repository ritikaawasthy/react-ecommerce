import {useContext, createContext, useEffect, useState} from "react";
const AuthContext= createContext();

const AuthProvider=({children})=>{
  const getUser=()=>{
    try{
      const currentUser=localStorage.getItem("user");
      return currentUser;
    }
    catch(error){
      return false
    }
  }

  const getToken=()=>{
    try{
      const token=localStorage.getItem("authToken");
      return token;
    }
    catch(error){
      return false
    }
  }

  const [user, setUser]= useState(getUser() || "");
  const [token, setToken]= useState(getToken() || "");


  return (
    <AuthContext.Provider value={{token, setToken, user, setUser}}>
           {children}
    </AuthContext.Provider>
  )

}

const useAuth=()=> useContext(AuthContext);
export {useAuth, AuthProvider}
