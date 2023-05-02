import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const singInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
  const logOut = () => {
    return signOut(auth);
  }
// observe auth state changes
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('auth state change' , currentUser);
        setUser(currentUser);
    })
    return () => unsubscribe();
},[])
  const authInfo = {
    user,
    singInWithGoogle,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
