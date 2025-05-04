import React from "react";
import { AuthContex } from "./AuthContex";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {

    // create user
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // signin user

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
  const userInfo = {
    createUser,
    signInUser
  };
  return <AuthContex value={userInfo}>{children}</AuthContex>;
};

export default AuthProvider;
