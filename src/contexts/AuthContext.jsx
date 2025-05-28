import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, googleProvider, signInWithPopup, signOut as firebaseSignOut } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast({ title: "Sucesso!", description: "Login com Google realizado." });
    } catch (error) {
      console.error("Erro no login com Google:", error);
      toast({ title: "Erro", description: "Falha ao fazer login com Google.", variant: "destructive" });
    }
  };

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
      toast({ title: "Sucesso!", description: "Logout realizado." });
    } catch (error) {
      console.error("Erro no logout:", error);
      toast({ title: "Erro", description: "Falha ao fazer logout.", variant: "destructive" });
    }
  };
  
  const value = {
    currentUser,
    loginWithGoogle,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};