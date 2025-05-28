import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, LogOut, User, Home, Info, Mail, Brain } from 'lucide-react';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-gray-100 transition-colors duration-300 flex items-center">
          <Brain className="mr-2 h-7 w-7 text-yellow-300" />
          Mente Serena Corp
        </Link>
        <div className="space-x-2 sm:space-x-4 flex items-center">
          <Link to="/" className="text-white hover:text-yellow-200 transition-colors duration-300 flex items-center px-2 py-1 rounded-md hover:bg-white/20">
            <Home className="mr-1 h-5 w-5" /> <span className="hidden sm:inline">Início</span>
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-200 transition-colors duration-300 flex items-center px-2 py-1 rounded-md hover:bg-white/20">
            <Info className="mr-1 h-5 w-5" /> <span className="hidden sm:inline">Sobre</span>
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-200 transition-colors duration-300 flex items-center px-2 py-1 rounded-md hover:bg-white/20">
            <Mail className="mr-1 h-5 w-5" /> <span className="hidden sm:inline">Contato</span>
          </Link>
          {currentUser ? (
            <>
              <Button variant="ghost" onClick={() => navigate('/profile')} className="text-white hover:bg-white/20 hover:text-yellow-200">
                <User className="mr-0 sm:mr-2 h-5 w-5" /> <span className="hidden sm:inline">Perfil</span>
              </Button>
              <Button onClick={handleLogout} variant="destructive" className="bg-rose-500 hover:bg-rose-600 text-white">
                <LogOut className="mr-0 sm:mr-2 h-5 w-5" /> <span className="hidden sm:inline">Sair</span>
              </Button>
            </>
          ) : (
            <Button onClick={() => navigate('/login')} className="bg-yellow-400 hover:bg-yellow-500 text-teal-800">
              <LogIn className="mr-0 sm:mr-2 h-5 w-5" /> <span className="hidden sm:inline">Login</span>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;