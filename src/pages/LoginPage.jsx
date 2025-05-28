import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, Leaf } from 'lucide-react';

const LoginPage = () => {
  const { loginWithGoogle, currentUser } = useAuth();
  const navigate = useNavigate();

  if (currentUser) {
    navigate('/'); 
  }

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
  };

  return (
    <motion.div 
      className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gradient-to-br from-sky-100 via-teal-50 to-blue-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl border border-slate-200 text-slate-700">
          <CardHeader className="text-center">
            <motion.div 
              className="mx-auto mb-4 p-3 bg-teal-100 rounded-full inline-block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
            >
              <Leaf className="h-10 w-10 text-teal-600" />
            </motion.div>
            <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
              Acesse sua Conta
            </CardTitle>
            <CardDescription className="text-slate-500">
              Entre com suas credenciais ou use o Google.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-600">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input id="email" type="email" placeholder="seu@email.com" className="pl-10 bg-slate-50 border-slate-300 focus:border-teal-500 focus:ring-teal-500 text-slate-700 placeholder-slate-400" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-600">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input id="password" type="password" placeholder="********" className="pl-10 bg-slate-50 border-slate-300 focus:border-teal-500 focus:ring-teal-500 text-slate-700 placeholder-slate-400" />
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-3 transform hover:scale-105 transition-transform duration-300">
              <LogIn className="mr-2 h-5 w-5" /> Entrar
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white/80 px-2 text-slate-500 rounded-md">Ou continue com</span>
              </div>
            </div>
            <Button variant="outline" onClick={handleGoogleLogin} className="w-full bg-white hover:bg-slate-50 text-slate-600 font-semibold border-slate-300 hover:border-slate-400 transform hover:scale-105 transition-transform duration-300">
              <img  src="/google-logo.svg" alt="Google logo" className="mr-2 h-5 w-5" src="https://images.unsplash.com/photo-1678483789111-3a04c4628bd6" />
              Entrar com Google
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;