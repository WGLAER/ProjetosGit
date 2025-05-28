import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, HeartHandshake, Sparkles } from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 text-slate-700"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-700"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Sobre Nós
        </motion.h1>
        
        <motion.section 
          className="mb-12 p-6 bg-white backdrop-blur-md rounded-xl shadow-lg border border-slate-200"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center mb-4">
            <Target className="h-10 w-10 text-cyan-500 mr-4" />
            <h2 className="text-3xl font-semibold text-slate-800">Nossa Missão</h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nossa missão é transformar o ambiente de trabalho em um espaço onde o bem-estar e a produtividade florescem juntos. Acreditamos que colaboradores felizes e saudáveis são a chave para o sucesso de qualquer organização. Por isso, desenvolvemos ferramentas inovadoras para monitorar, analisar e aprimorar a qualidade de vida no trabalho, com um toque humano e acolhedor.
          </p>
        </motion.section>

        <motion.section 
          className="mb-12 p-6 bg-white backdrop-blur-md rounded-xl shadow-lg border border-slate-200"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <Users className="h-10 w-10 text-teal-500 mr-4" />
            <h2 className="text-3xl font-semibold text-slate-800">Quem Somos</h2>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Somos uma equipe apaixonada por tecnologia e bem-estar humano. Combinamos expertise em desenvolvimento de software, psicologia organizacional e análise de dados para criar soluções que realmente fazem a diferença. Estamos comprometidos em fornecer uma plataforma intuitiva, segura e eficaz para empresas que se importam com seus talentos e buscam um ambiente mais saudável.
          </p>
        </motion.section>

        <motion.section 
          className="p-6 bg-white backdrop-blur-md rounded-xl shadow-lg border border-slate-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex items-center mb-4">
            <HeartHandshake className="h-10 w-10 text-sky-500 mr-4" />
            <h2 className="text-3xl font-semibold text-slate-800">Nossos Valores</h2>
          </div>
          <ul className="list-none space-y-3 text-lg text-slate-600 leading-relaxed">
            <li className="flex items-start"><Sparkles className="h-5 w-5 text-cyan-500 mr-2 mt-1 shrink-0" /><div><span className="font-semibold text-cyan-700">Empatia:</span> Colocamo-nos no lugar dos nossos usuários para entender suas reais necessidades.</div></li>
            <li className="flex items-start"><Sparkles className="h-5 w-5 text-teal-500 mr-2 mt-1 shrink-0" /><div><span className="font-semibold text-teal-700">Inovação Consciente:</span> Buscamos constantemente novas formas de melhorar, sempre com foco no bem-estar.</div></li>
            <li className="flex items-start"><Sparkles className="h-5 w-5 text-sky-500 mr-2 mt-1 shrink-0" /><div><span className="font-semibold text-sky-700">Integridade e Confiança:</span> Agimos com transparência e ética, garantindo a segurança e privacidade dos dados.</div></li>
            <li className="flex items-start"><Sparkles className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /><div><span className="font-semibold text-green-700">Colaboração e Apoio:</span> Acreditamos no poder do trabalho em equipe e no suporte mútuo.</div></li>
            <li className="flex items-start"><Sparkles className="h-5 w-5 text-amber-500 mr-2 mt-1 shrink-0" /><div><span className="font-semibold text-amber-700">Impacto Positivo:</span> Nosso objetivo final é gerar um impacto positivo duradouro na vida das pessoas e nas organizações.</div></li>
          </ul>
        </motion.section>
        
        <div className="mt-12 text-center">
          <img  class="mx-auto rounded-lg shadow-xl w-full max-w-2xl h-auto" alt="Equipe diversificada e sorridente em um escritório moderno com plantas e luz natural" src="https://images.unsplash.com/photo-1635669405842-5ba68c4fd1ba" />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;