
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ListChecks, CalendarDays, Clock, Feather } from 'lucide-react';
import { questionnairesData } from '@/lib/questionnaires';

const QuestionnaireListPage = () => {
  
  const questionnaires = Object.values(questionnairesData).map(q => ({
    ...q,
    status: q.id === 'semanal' ? "Disponível" : q.id === 'mensal' ? "Respondido" : "Bloqueado" 
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-4xl font-bold mb-8 text-slate-800 text-center">Meus Questionários</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {questionnaires.map((q, index) => (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className={`bg-white border-slate-200 shadow-xl h-full flex flex-col hover:border-teal-400 transition-all duration-300`}>
              <CardHeader className={`${q.bgColor} rounded-t-lg`}>
                <div className="flex items-center justify-between mb-2">
                  <Feather className={`h-10 w-10 ${q.iconColor}`} />
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    q.status === 'Disponível' ? 'bg-green-100 text-green-700 border border-green-300' : 
                    q.status === 'Respondido' ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' : 
                    'bg-red-100 text-red-700 border border-red-300'
                  }`}>
                    {q.status}
                  </span>
                </div>
                <CardTitle className={`text-2xl ${q.iconColor.replace('text-','text-')}`}>{q.title}</CardTitle>
                <CardDescription className="text-slate-600">{q.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate-500">
                    <CalendarDays className={`h-4 w-4 mr-2 ${q.iconColor}`} />
                    Frequência: {q.frequency}
                  </div>
                  {q.status === "Respondido" && (
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="h-4 w-4 mr-2 text-yellow-500" />
                      Próxima liberação: DD/MM/AAAA
                    </div>
                  )}
                </div>
                <Button 
                  asChild 
                  className={`w-full mt-auto ${q.status !== 'Disponível' ? 'bg-slate-300 hover:bg-slate-400 text-slate-500 cursor-not-allowed' : 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white'}`}
                  disabled={q.status !== 'Disponível'}
                >
                  <Link to={`/questionnaire/${q.id}`}>
                    {q.status === 'Disponível' ? 'Responder Agora' : q.status === 'Respondido' ? 'Ver Respostas' : 'Bloqueado'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionnaireListPage;
