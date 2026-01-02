import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loding, setLoding] = useState(true);

  const signUpUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (data) => {
    setLoding(true);
    return updateProfile(auth.currentUser, data);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const emailpasswordLoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    setLoding(false);
    const unmout = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(true);
    });

    return () => {
      unmout();
    };
  }, [user]);

  const allInfo = {
    signUpUser,
    updateUserInfo,
    googleLogin,
    user,
    loding,
    emailpasswordLoginUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
