import { useEffect, useState } from "react";
import firebaseAuth from "../Firebase/FirebaseInit";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

firebaseAuth();
const useFirebase = () => {
  // provider & auth
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  // state for user and error
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  // loading state
  const [isLoading, setIsLoading] = useState(true);

  // login function
  const logInWithGoogle = () => {
   
   return signInWithPopup(auth, provider)

  };

  // observe

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  // log out

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setIsLoading(false));
  };

  return { user, setUser, error, setError, isLoading,setIsLoading, logInWithGoogle, logOut };
};

export default useFirebase;
