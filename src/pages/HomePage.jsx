import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, Users, Smile, Leaf } from 'lucide-react';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      <header className="mb-12">
        <motion.div 
          className="inline-block p-3 mb-6 bg-teal-100 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 150 }}
        >
          <Leaf className="h-12 w-12 text-teal-600" />
        </motion.div>
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-700"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Cultivando o Bem-Estar no Trabalho
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Nossa plataforma ajuda a monitorar e melhorar a qualidade de vida e o bem-estar no trabalho através de análises inteligentes e acolhedoras.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link to="/login">Comece Sua Jornada</Link>
          </Button>
        </motion.div>
      </header>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <BarChart3 className="h-16 w-16 text-cyan-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-slate-700 mb-3">Análises Humanizadas</h2>
          <p className="text-slate-500">
            Insights valiosos sobre o bem-estar da sua equipe com relatórios claros e focados no desenvolvimento.
          </p>
        </motion.div>
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <Users className="h-16 w-16 text-teal-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-slate-700 mb-3">Foco no Indivíduo</h2>
          <p className="text-slate-500">
            Ferramentas para entender e atender às necessidades de cada profissional, promovendo um ambiente de apoio.
          </p>
        </motion.div>
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Smile className="h-16 w-16 text-sky-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-slate-700 mb-3">Cultura Positiva</h2>
          <p className="text-slate-500">
            Promova uma cultura organizacional mais saudável, engajadora, resiliente e produtiva.
          </p>
        </motion.div>
      </section>

      <section className="py-12 bg-teal-50/50 rounded-xl shadow-inner border border-teal-100">
        <h2 className="text-3xl font-bold text-slate-700 mb-8">Como Funciona?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
          <div className="p-6 bg-white rounded-lg shadow-md border border-slate-200">
            <h3 className="text-xl font-semibold text-cyan-600 mb-2">1. Cadastro e Configuração</h3>
            <p className="text-slate-500">Administradores cadastram usuários e empresas de forma simples e segura.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-slate-200">
            <h3 className="text-xl font-semibold text-teal-600 mb-2">2. Resposta aos Questionários</h3>
            <p className="text-slate-500">Colaboradores respondem questionários intuitivos e confidenciais.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-slate-200">
            <h3 className="text-xl font-semibold text-sky-600 mb-2">3. Análise de Dados</h3>
            <p className="text-slate-500">Nossa plataforma calcula índices e gera relatórios com foco em bem-estar.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-slate-200">
            <h3 className="text-xl font-semibold text-green-600 mb-2">4. Ações Estratégicas</h3>
            <p className="text-slate-500">Utilize os insights para implementar melhorias e acompanhar a evolução do bem-estar.</p>
          </div>
        </div>
      </section>
      
      <div className="mt-16">
        <img  className="mx-auto rounded-lg shadow-xl w-full max-w-3xl h-auto" alt="Pessoas sorrindo e colaborando em um ambiente de trabalho calmo e bem iluminado, com plantas ao fundo" src="https://images.unsplash.com/photo-1655220009493-b2d382a5eb63" />
      </div>

    </motion.div>
  );
};

export default HomePage;
