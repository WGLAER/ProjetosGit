import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Search, UserX, Edit } from 'lucide-react';

const UserManagementPage = () => {
  // Placeholder data
  const users = [
    { id: 1, name: "João Silva", email: "joao@empresa.com", company: "Empresa A", role: "Usuário Comum", status: "Ativo" },
    { id: 2, name: "Maria Oliveira", email: "maria@empresa.b.com", company: "Empresa B", role: "Usuário Comum", status: "Ativo" },
    { id: 3, name: "Carlos Pereira", email: "carlos@empresa.a.com", company: "Empresa A", role: "Administrador", status: "Inativo" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800">Gerenciamento de Usuários</h1>
        <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white">
          <PlusCircle className="mr-2 h-5 w-5" /> Adicionar Usuário
        </Button>
      </div>

      <Card className="bg-white backdrop-blur-md border-slate-200 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="text-xl text-slate-700">Filtrar Usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Input placeholder="Buscar por nome, email ou empresa..." className="bg-slate-50 border-slate-300 text-slate-700 placeholder-slate-400 focus:border-teal-500 focus:ring-teal-500" />
            <Button variant="outline" className="text-teal-600 border-teal-400 hover:bg-teal-500/20 hover:text-teal-700">
              <Search className="mr-2 h-5 w-5" /> Buscar
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="overflow-x-auto bg-white backdrop-blur-md rounded-lg shadow-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Nome</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Empresa</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Cargo</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{user.company}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <Button variant="ghost" size="icon" className="text-sky-600 hover:text-sky-700 hover:bg-sky-100">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-rose-500 hover:text-rose-600 hover:bg-rose-100">
                    <UserX className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {users.length === 0 && (
        <p className="text-center text-slate-500 mt-4">Nenhum usuário encontrado.</p>
      )}
    </motion.div>
  );
};

export default UserManagementPage;