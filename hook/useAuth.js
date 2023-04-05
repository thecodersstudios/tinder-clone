import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from '@firebase/auth';
import { auth } from '../db/firebase-config';
WebBrowser.maybeCompleteAuthSession();
const initState = {
  user: null,
  handleLogin: async () => {},
  logout: async () => {},
  loading: false,
  error: null,
};

const AuthContext = createContext(initState);

const config = {
  expoClientId: 'androidClientId',
  iosClientId: 'iosClientId',
  androidClientId: 'androidClientId',
  scopes: ['profile', 'email'],
  permissions: ['public_profile', 'email', 'gender', 'location'],
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest(config);
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    await promptAsync();
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    await signOut(auth).catch((error) => setError(error.message));
    setLoading(false);
  };

  useEffect(() => {
    const init = async () => {
      try {
        if (response?.type !== 'success') return;
        const { authentication } = response;
        const credential = GoogleAuthProvider.credential(
          authentication.idToken,
          authentication.accessToken
        );

        await signInWithCredential(auth, credential).catch((error) => setError(error.message));
      } catch (error) {
        setError(error.message);
        console.error(error.message ?? error);
      }
      setLoading(false);
    };
    init();
  }, [response]);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        user ? setUser(user) : setUser(null);
      }),
    []
  );

  useEffect(() => {
    console.log('error', error);
  }, [error]);

  const value = useMemo(
    () => ({
      user,
      handleLogin,
      logout,
      loading,
      error,
    }),
    [user, handleLogin, logout, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
