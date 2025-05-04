import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);

    // create user
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // signin user

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }


    // signout

    const userSignOut =()=>{
        return signOut(auth)
    }

    // onAuthStateChange

    useEffect(()=>{

        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log("current user inside the onauthstatechange",currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }

    },[])



  const userInfo = {
    createUser,
    signInUser,
    user,
    userSignOut
  };
  return <AuthContex value={userInfo}>{children}</AuthContex>;
};

export default AuthProvider;
