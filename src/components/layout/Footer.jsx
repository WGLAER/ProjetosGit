import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-100 text-slate-600 p-6 mt-auto border-t border-slate-200">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} Mente Serena Corp. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Promovendo o bem-estar com <span role="img" aria-label="folha verde">🌿</span> por Hostinger Horizons
        </p>
      </div>
    </footer>
  );
};

export default Footer;