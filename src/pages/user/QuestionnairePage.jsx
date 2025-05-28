
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, CheckCircle, Edit3 } from 'lucide-react';
import { questionnairesData } from '@/lib/questionnaires';

const QuestionnairePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const currentQuestionnaire = questionnairesData[id];

  if (!currentQuestionnaire) {
    return <div className="text-center text-slate-700 p-8">Questionário não encontrado.</div>;
  }

  const handleInputChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Respostas Enviadas:", answers);
    alert("Questionário enviado com sucesso! (Verifique o console para as respostas)");
    navigate('/questionnaires'); 
  };
  
  let questionCounter = 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <Button variant="outline" onClick={() => navigate('/questionnaires')} className="mb-6 text-teal-600 border-teal-400 hover:bg-teal-500/20 hover:text-teal-700">
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Lista
      </Button>

      <Card className="bg-white border-slate-200 shadow-xl">
        <CardHeader className={`${currentQuestionnaire.bgColor} rounded-t-lg`}>
          <div className="flex items-center mb-2">
            <Edit3 className={`h-8 w-8 ${currentQuestionnaire.iconColor} mr-3`} />
            <CardTitle className={`text-3xl ${currentQuestionnaire.iconColor.replace('text-','text-')}`}>{currentQuestionnaire.title}</CardTitle>
          </div>
          <CardDescription className="text-slate-600 ml-11">{currentQuestionnaire.description} Suas respostas são confidenciais.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {currentQuestionnaire.questions ? (
              currentQuestionnaire.questions.map((question) => {
                questionCounter++;
                return (
                  <div key={question.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
                    <Label htmlFor={question.id} className="block text-md font-medium text-slate-700 mb-3">
                      {questionCounter}. {question.text}
                    </Label>
                    {question.type === 'text' ? (
                      <Textarea
                        id={question.id}
                        value={answers[question.id] || ''}
                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                        className="w-full p-2 rounded bg-white border-slate-300 text-slate-700 placeholder-slate-400 focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Sua resposta aqui..."
                        rows={3}
                      />
                    ) : (
                      <RadioGroup
                        id={question.id}
                        value={answers[question.id] || ''}
                        onValueChange={(value) => handleInputChange(question.id, value)}
                        className="space-y-2"
                      >
                        {question.scale.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2 p-2 rounded hover:bg-slate-100 transition-colors">
                            <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} className="text-teal-600 border-slate-400 focus:ring-teal-500" />
                            <Label htmlFor={`${question.id}-${option.id}`} className="font-normal text-slate-600 cursor-pointer">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                  </div>
                );
              })
            ) : currentQuestionnaire.dimensions ? (
              currentQuestionnaire.dimensions.map((dimension) => (
                <div key={dimension.id} className="mb-8">
                  <h3 className="text-xl font-semibold text-sky-700 mb-4 p-3 bg-sky-100 rounded-md border-l-4 border-sky-500">{dimension.name}</h3>
                  {dimension.questions.map((question) => {
                    questionCounter++;
                    return (
                      <div key={question.id} className="p-4 mb-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
                        <Label htmlFor={question.id} className="block text-md font-medium text-slate-700 mb-3">
                         {questionCounter}. {question.text}
                        </Label>
                        <RadioGroup
                          id={question.id}
                          value={answers[question.id] || ''}
                          onValueChange={(value) => handleInputChange(question.id, value)}
                          className="space-y-2"
                        >
                          {question.scale.map((option) => (
                            <div key={option.id} className="flex items-center space-x-2 p-2 rounded hover:bg-slate-100 transition-colors">
                              <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} className="text-teal-600 border-slate-400 focus:ring-teal-500" />
                              <Label htmlFor={`${question.id}-${option.id}`} className="font-normal text-slate-600 cursor-pointer">
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    );
                  })}
                </div>
              ))
            ) : <p>Nenhuma pergunta definida para este questionário.</p>}
            
            <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-3 text-lg">
              <CheckCircle className="mr-2 h-5 w-5" /> Enviar Respostas
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QuestionnairePage;
