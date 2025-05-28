import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, BarChartBig, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const ReportPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const reportData = {
    questionnaireTitle: "Avaliação Mensal - Janeiro 2025",
    dateCompleted: "05/02/2025",
    iqvbtScore: 75,
    iqvbtInterpretation: "Muito Bom - Ambiente com elementos positivos predominantes e poucos fatores de risco.",
    holdingIndexScore: 68,
    holdingIndexInterpretation: "Satisfatório - Suporte institucional adequado, com espaço para melhorias.",
    dimensions: [
      { name: "Condições Físicas e Segurança", score: 80, trend: "up" },
      { name: "Carga de Trabalho e Equilíbrio", score: 70, trend: "stable" },
      { name: "Relações Interprofissionais", score: 75, trend: "up" },
      { name: "Desenvolvimento Profissional", score: 65, trend: "down" },
      { name: "Propósito e Significado", score: 85, trend: "stable" },
      { name: "Saúde e Bem-Estar Psicológico", score: 72, trend: "up" },
    ]
  };

  const getScoreColor = (score) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-lime-600";
    if (score >= 55) return "text-yellow-500";
    if (score >= 40) return "text-orange-500";
    if (score >= 25) return "text-red-500";
    return "text-rose-600";
  };

  const getScoreBgColor = (score) => {
    if (score >= 85) return "bg-green-500";
    if (score >= 70) return "bg-lime-500";
    if (score >= 55) return "bg-yellow-400";
    if (score >= 40) return "bg-orange-400";
    if (score >= 25) return "bg-red-400";
    return "bg-rose-500";
  };
  
  const TrendIcon = ({ trend }) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-slate-400" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <Button variant="outline" onClick={() => navigate('/questionnaires')} className="mb-6 text-teal-600 border-teal-400 hover:bg-teal-500/20 hover:text-teal-700">
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Questionários
      </Button>

      <Card className="bg-white border-slate-200 shadow-xl">
        <CardHeader className="text-center bg-sky-50 rounded-t-lg p-6">
          <FileText className="h-16 w-16 text-sky-500 mx-auto mb-4" />
          <CardTitle className="text-3xl text-sky-700">{reportData.questionnaireTitle}</CardTitle>
          <CardDescription className="text-slate-500">Completado em: {reportData.dateCompleted}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4 text-center">Índice Composto de Qualidade de Vida e Bem-Estar no Trabalho (IQVBT)</h2>
            <div className="text-center p-6 bg-teal-50 rounded-lg border border-teal-200">
              <p className={`text-5xl font-bold ${getScoreColor(reportData.iqvbtScore)}`}>{reportData.iqvbtScore}</p>
              <p className="text-lg text-slate-600 mt-2">{reportData.iqvbtInterpretation}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-600 mb-4 text-center">Índice de Holding Institucional</h2>
            <div className="text-center p-6 bg-cyan-50 rounded-lg border border-cyan-200">
              <p className={`text-5xl font-bold ${getScoreColor(reportData.holdingIndexScore)}`}>{reportData.holdingIndexScore}</p>
              <p className="text-lg text-slate-600 mt-2">{reportData.holdingIndexInterpretation}</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-green-600 mb-4 text-center">Desempenho por Dimensão (IQVBT)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reportData.dimensions.map(dim => (
                <div key={dim.name} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-md font-medium text-slate-700">{dim.name}</h3>
                    <div className="flex items-center space-x-1">
                      <span className={`text-xl font-bold ${getScoreColor(dim.score)}`}>{dim.score}</span>
                      <TrendIcon trend={dim.trend} />
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getScoreBgColor(dim.score)}`} 
                      style={{ width: `${dim.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center mt-10">
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-3 px-6">
              <BarChartBig className="mr-2 h-5 w-5" /> Ver Histórico de Relatórios
            </Button>
          </div>

        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ReportPage;