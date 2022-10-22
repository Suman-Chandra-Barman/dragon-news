import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.emailVerified || currentUser?.emailVerified === null) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const userData = {
    user,
    loading,
    setLoading,
    createUser,
    login,
    googleLogin,
    emailVerification,
    updateUserProfile,
    logout,
  };
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
