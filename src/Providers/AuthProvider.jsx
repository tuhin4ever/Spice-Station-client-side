import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [reload, setReload] = useState(null);
  const [error, setError] = useState("");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };
  const singInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };
  // observe auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    if (reload) {
      toast.success(`Welcome ${user.displayName} ✨`, {
        hideProgressBar: true,
        position: "top-center",
      });
    }
    return () => unsubscribe();
  }, [reload]);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    setReload,
    singIn,
    singInWithGoogle,
    singInWithGithub,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
