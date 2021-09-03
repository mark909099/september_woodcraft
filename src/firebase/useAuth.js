import React, { useState, useEffect, useContext, createContext} from 'react';
import { useHistory } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API,
    authDomain: process.env.REACT_APP_FB_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT,
    storageBucket: process.env.REACT_APP_FB_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_SENDER,
    appId: process.env.REACT_APP_FB_APP,
    measurementId: process.env.REACT_APP_MEASUREMENT
  };
  
const app = initializeApp(firebaseConfig);
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const history = useHistory();
  const auth = getAuth();

  const actionCodeSettings = {
    url:"http://localhost:3000/confirm",
    handleCodeInApp: true,
  }

const sendMagicLink = (email) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
};

const signMagicLink = (email) => {
  signInWithEmailLink(auth, email, window.location.href)
  .then((result) => {
    // Clear email from storage.
    window.localStorage.removeItem('emailForSignIn');
    // You can access the new user via result.user
  })
  .catch((error) => {
    // Some error occurred, you can inspect the code: error.code
    // Common errors could be invalid email and invalid or expired OTPs.
    console.log(error);
    console.log(error.code)
  });
}

const provider = new GoogleAuthProvider();
const signGoogle = () => {
  signInWithRedirect(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
  }).catch((error) => {
    console.log(error.code);
    console.log(error.message);
    // The email of the user's account used.
    console.log(error.email);
    // The AuthCredential type that was used.
    console.log(GoogleAuthProvider.credentialFromError(error));
  });
}


const logout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.log(error)
    // An error happened.
  });
}


// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (user1) => {
      
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         setUser(user1);
//         // setIsAuthenticating(false);
//         });

//         return () => unsubscribe();
//    }, []);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user1) => {
    // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user1);
          setIsAuthenticating(false);
          });

          return () => unsubscribe();
     }, []);

const values = {
  user,
  sendMagicLink,
  signMagicLink,
  signGoogle,
  logout
}

return (
  <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
  </AuthContext.Provider>
)

}