import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Edit3, ShieldCheck, Activity, BarChart, UserCheck2 } from 'lucide-react';

const UserProfilePage = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><p className="text-xl text-slate-600">Carregando perfil...</p></div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const getInitials = (name) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return names[0][0].toUpperCase();
  };

  return (
    <motion.div 
      className="container mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-lg shadow-xl border border-slate-200 text-slate-700">
        <CardHeader className="text-center">
          <motion.div 
            className="relative mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <Avatar className="w-32 h-32 border-4 border-teal-400 shadow-lg">
              <AvatarImage src={currentUser.photoURL || ''} alt={currentUser.displayName || 'User Avatar'} />
              <AvatarFallback className="text-4xl bg-cyan-500 text-white">
                {getInitials(currentUser.displayName)}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline" size="icon" className="absolute bottom-0 right-0 bg-white hover:bg-slate-100 text-slate-600 rounded-full shadow-md border-slate-300">
              <Edit3 className="h-5 w-5" />
            </Button>
          </motion.div>
          <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
            {currentUser.displayName || 'Usuário'}
          </CardTitle>
          <CardDescription className="text-slate-500">{currentUser.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoItem icon={<ShieldCheck className="text-green-500" />} label="Status da Conta" value="Verificada" />
            <InfoItem icon={<Activity className="text-sky-500" />} label="Último Login" value={new Date(currentUser.metadata.lastSignInTime).toLocaleDateString('pt-BR')} />
            <InfoItem icon={<BarChart className="text-amber-500" />} label="Questionários Respondidos" value="0" />
            <InfoItem icon={<UserCheck2 className="text-purple-500" />} label="Tipo de Usuário" value="Comum" />
          </div>
          
          <div className="pt-6 border-t border-slate-200">
            <h3 className="text-xl font-semibold mb-4 text-center text-teal-600">Ações Rápidas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white">
                Ver Meus Relatórios
              </Button>
              <Button variant="outline" className="w-full text-teal-600 border-teal-400 hover:bg-teal-500/20 hover:text-teal-700">
                Responder Questionário
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
    <div className="flex-shrink-0 text-2xl">{icon}</div>
    <div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="font-semibold text-lg text-slate-700">{value}</p>
    </div>
  </div>
);

export default UserProfilePage;