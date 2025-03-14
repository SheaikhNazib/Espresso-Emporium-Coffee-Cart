import React, { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../components/firebase/firebase.init';

export const authContext = createContext(null);

export const useAuth = () => {
    return useContext(authContext);
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setLoading(false);
                return userCredential;
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setLoading(false);
                return userCredential;
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const signInWithGoogle = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                setLoading(false);
                return result;
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                localStorage.clear(); // Clear local storage
                setUser(null);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        logout,
    };

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;