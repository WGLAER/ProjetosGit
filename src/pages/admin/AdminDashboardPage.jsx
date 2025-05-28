import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, BarChart2, Settings, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboardPage = () => {
  const stats = [
    { title: "Usuários Ativos", value: "120", icon: <Users className="h-8 w-8 text-sky-500" />, color: "sky", link: "/admin/users" },
    { title: "Questionários Recentes", value: "85", icon: <FileText className="h-8 w-8 text-green-500" />, color: "green", link: "/admin/reports" },
    { title: "Empresas Parceiras", value: "15", icon: <Building className="h-8 w-8 text-amber-500" />, color: "amber", link: "/admin/companies" },
    { title: "Configurações Gerais", value: "Acessar", icon: <Settings className="h-8 w-8 text-slate-500" />, color: "slate", link: "/admin/settings" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-4xl font-bold mb-8 text-slate-800">Painel do Administrador</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link to={stat.link}>
              <Card className={`bg-white backdrop-blur-md border-slate-200 hover:border-${stat.color}-400 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className={`text-sm font-medium text-${stat.color}-600`}>{stat.title}</CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold text-slate-700`}>{stat.value}</div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white backdrop-blur-md border-slate-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-slate-700">Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-500">Nenhuma atividade recente para mostrar (placeholder).</p>
          </CardContent>
        </Card>
        <Card className="bg-white backdrop-blur-md border-slate-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-slate-700">Relatórios Rápidos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-500">Links para relatórios rápidos (placeholder).</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default AdminDashboardPage;