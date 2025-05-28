import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; 
import { useToast } from '@/components/ui/use-toast';
import { Send, Mail, Phone, MapPin, MessageSquare as MessageSquareHeart } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por entrar em contato. Responderemos em breve com carinho.",
      className: "bg-teal-500 border-teal-600 text-white",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 text-slate-700"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-700"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Fale Conosco
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
                <MessageSquareHeart className="h-7 w-7 text-teal-500 mr-3" />
                Estamos aqui para ouvir
              </h2>
              <p className="text-slate-600 mb-6">
                Se você tiver dúvidas, sugestões ou precisar de suporte, nossa equipe está pronta para ajudar.
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-sky-50 rounded-lg border border-sky-200">
                  <Mail className="h-6 w-6 text-sky-600 mr-3 shrink-0" />
                  <a href="mailto:contato@menteserenacorp.com" className="text-sky-700 hover:text-sky-800 break-all">contato@menteserenacorp.com</a>
                </div>
                <div className="flex items-center p-3 bg-teal-50 rounded-lg border border-teal-200">
                  <Phone className="h-6 w-6 text-teal-600 mr-3 shrink-0" />
                  <span className="text-teal-700">(XX) XXXXX-XXXX</span>
                </div>
                <div className="flex items-start p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                  <MapPin className="h-6 w-6 text-cyan-600 mr-3 mt-1 shrink-0" />
                  <span className="text-cyan-700">Rua da Serenidade, 123, Bairro Harmonia, Cidade Feliz - EF</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Horário de Atendimento</h2>
              <p className="text-slate-600">
                Segunda a Sexta: 9:00 - 18:00 (Horário de Brasília)
              </p>
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6 p-8 bg-white rounded-xl shadow-2xl border border-slate-200"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">Nome Completo</Label>
              <Input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-50 border-slate-300 focus:border-teal-500 focus:ring-teal-500 text-slate-700 placeholder-slate-400" />
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">Email</Label>
              <Input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-50 border-slate-300 focus:border-teal-500 focus:ring-teal-500 text-slate-700 placeholder-slate-400" />
            </div>
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-1">Sua Mensagem</Label>
              <Textarea id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-slate-50 border-slate-300 focus:border-teal-500 focus:ring-teal-500 text-slate-700 placeholder-slate-400" />
            </div>
            <div>
              <Button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-3 transform hover:scale-105 transition-transform duration-300">
                <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;