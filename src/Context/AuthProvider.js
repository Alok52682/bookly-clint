import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const signWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // create user with email & password
    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    // update user info
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    // login user with email & pass
    const userLogIn = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }
    // forget password
    const handleForgetPass = (userEmail) => {
        if (!userEmail) {
            alert('Please enter your email!');
            return
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent');
            })
            .catch(error => {
                console.log('error', error);
            })
    }
    // log out
    const logOut = () => {
        localStorage.removeItem('token');
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, [])

    // context values
    const authInfo = {
        user,
        loading,
        signWithGoogle,
        createUser,
        updateUser,
        userLogIn,
        handleForgetPass,
        logOut
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;