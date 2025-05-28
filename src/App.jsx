import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import UserProfilePage from '@/pages/UserProfilePage';
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage';
import UserManagementPage from '@/pages/admin/UserManagementPage';
import QuestionnaireListPage from '@/pages/user/QuestionnaireListPage';
import QuestionnairePage from '@/pages/user/QuestionnairePage';
import ReportPage from '@/pages/user/ReportPage';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><p className="text-xl text-white">Carregando...</p></div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  const isAdmin = currentUser.email === 'admin@example.com'; 

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/profile" element={<ProtectedRoute><UserProfilePage /></ProtectedRoute>} />
        
        <Route path="/questionnaires" element={<ProtectedRoute><QuestionnaireListPage /></ProtectedRoute>} />
        <Route path="/questionnaire/:id" element={<ProtectedRoute><QuestionnairePage /></ProtectedRoute>} />
        <Route path="/report/:id" element={<ProtectedRoute><ReportPage /></ProtectedRoute>} />

        <Route path="/admin/dashboard" element={<ProtectedRoute adminOnly={true}><AdminDashboardPage /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute adminOnly={true}><UserManagementPage /></ProtectedRoute>} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;