
import React from 'react';

export const FREQUENCY_SCALE = [
  { id: 'never', label: 'Nunca' },
  { id: 'rarely', label: 'Raramente (algumas vezes ao ano)' },
  { id: 'occasionally', label: 'Ocasionalmente (algumas vezes ao mês)' },
  { id: 'frequently', label: 'Frequentemente (algumas vezes por semana)' },
  { id: 'constantly', label: 'Constantemente (diariamente)' },
];

export const AGREEMENT_SCALE = [
  { id: 'strongly_disagree', label: 'Discordo totalmente' },
  { id: 'partially_disagree', label: 'Discordo parcialmente' },
  { id: 'neither_agree_nor_disagree', label: 'Nem concordo nem discordo' },
  { id: 'partially_agree', label: 'Concordo parcialmente' },
  { id: 'strongly_agree', label: 'Concordo totalmente' },
];

export const questionnairesData = {
  semanal: { 
    id: 'semanal',
    title: "Monitor Semanal", 
    description: "Reflexões leves sobre sua semana.", 
    frequency: "Semanal", 
    iconColor: "text-teal-500", 
    bgColor: "bg-teal-50",
    questions: [
      { id: 'q1', text: "Como você se sentiu esta semana em relação ao seu trabalho?", type: 'text' },
      { id: 'q2', text: "Houve algum desafio específico que impactou seu bem-estar?", type: 'text'},
      { id: 'q3', text: "Algo positivo aconteceu que gostaria de compartilhar?", type: 'text'},
    ] 
  },
  mensal: { 
    id: 'mensal',
    title: "Avaliação Mensal", 
    description: "Um olhar mais amplo sobre seu bem-estar.", 
    frequency: "Mensal", 
    iconColor: "text-cyan-500", 
    bgColor: "bg-cyan-50",
    questions: Array(15).fill("").map((_, i) => ({
      id: `mq${i+1}`,
      text: `Questão ${i+1} da avaliação mensal... (Texto da pergunta aqui)`, 
      type: 'agreement', 
      scale: AGREEMENT_SCALE
    }))
  },
  trimestral: { 
    id: 'trimestral',
    title: "Inventário Trimestral Completo", 
    description: "Análise aprofundada para autoconhecimento.", 
    frequency: "Trimestral", 
    iconColor: "text-sky-500", 
    bgColor: "bg-sky-50",
    dimensions: [
      {
        id: 'dim1',
        name: 'Dimensão 1: Condições Físicas e Segurança do Ambiente',
        questions: [
          { id: 'tq1', text: 'O ambiente físico em que realizo minhas atividades assistenciais é adequado para o cuidado seguro dos pacientes.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq2', text: 'Os recursos e equipamentos necessários para a realização do meu trabalho assistencial estão disponíveis quando preciso.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq3', text: 'Tenho acesso a equipamentos de proteção individual (EPIs) adequados para o tipo de assistência que realizo.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq4', text: 'Os espaços destinados ao descanso durante plantões e turnos são adequados para recuperação.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq5', text: 'O nível de ruído no meu local de trabalho permite concentração adequada para atividades assistenciais.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq6', text: 'A temperatura e ventilação do ambiente são confortáveis para a realização do trabalho assistencial.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq7', text: 'A iluminação do ambiente é adequada para os procedimentos e atividades que realizo.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq8', text: 'A distância entre os diferentes setores que preciso acessar durante meu trabalho é razoável e bem planejada.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq9', text: 'Percebo que o ambiente físico me protege contra riscos biológicos, químicos e físicos.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq10', text: 'Sinto-me fisicamente seguro(a) no meu ambiente de trabalho.', type: 'agreement', scale: AGREEMENT_SCALE },
        ]
      },
      {
        id: 'dim2',
        name: 'Dimensão 2: Carga de Trabalho e Equilíbrio',
        questions: [
          { id: 'tq11', text: 'A proporção entre o número de profissionais e pacientes em minha unidade permite assistência adequada.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq12', text: 'Consigo realizar pausas suficientes durante minha jornada para recuperação física e mental.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq13', text: 'A distribuição de tarefas assistenciais e administrativas permite que eu dedique tempo adequado ao cuidado direto.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq14', text: 'As escalas e turnos de trabalho são organizados de forma a minimizar impactos em minha saúde e vida pessoal.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq15', text: 'A carga assistencial leva em consideração diferentes níveis de complexidade dos pacientes.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq16', text: 'O tempo disponível para atendimento a cada paciente é compatível com as necessidades assistenciais.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq17', text: 'Consigo concluir minhas atividades dentro da jornada prevista, sem necessidade frequente de horas extras.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq18', text: 'A frequência de plantões noturnos ou finais de semana é distribuída de forma equilibrada na equipe.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq19', text: 'Sinto que minha carga de trabalho é compatível com minha capacidade física e emocional.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq20', text: 'Com que frequência me sinto exausto(a) ao final da jornada de trabalho.', type: 'frequency', scale: FREQUENCY_SCALE },
        ]
      },
      {
        id: 'dim3',
        name: 'Dimensão 3: Holding Institucional e Suporte Emocional',
        questions: [
          { id: 'tq21', text: 'Recebo apoio institucional adequado após eventos adversos ou situações emocionalmente difíceis.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq22', text: 'Sinto que posso compartilhar vulnerabilidades profissionais com minha liderança sem receio.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq23', text: 'As políticas institucionais demonstram valorização concreta dos profissionais assistenciais.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq24', text: 'Há reconhecimento formal e informal quando realizo um bom trabalho ou me dedico além do esperado.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq25', text: 'A liderança demonstra preocupação sincera com o bem-estar dos profissionais de saúde.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq26', text: 'A instituição oferece um ambiente que me faz sentir emocionalmente seguro(a) e acolhido(a).', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq27', text: 'Quando enfrento situações difíceis, sinto que há suporte institucional para me amparar.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq28', text: 'Existem mecanismos formais de apoio psicológico disponíveis após eventos traumáticos ou estressantes.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq29', text: 'A instituição oferece recursos concretos para lidar com situações de sofrimento emocional relacionadas ao trabalho.', type: 'agreement', scale: AGREEMENT_SCALE },
          { id: 'tq30', text: 'Sinto-me apoiado(a) pela instituição em momentos de fragilidade emocional.', type: 'agreement', scale: AGREEMENT_SCALE },
        ]
      },
    ]
  },
};
