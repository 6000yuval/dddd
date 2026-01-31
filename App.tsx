import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import GlossaryPage from './pages/GlossaryPage';
import { SearchProvider } from './contexts/SearchContext';
import SearchModal from './components/SearchModal';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <SearchProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-sans text-right" dir="rtl">
            <Navbar />
            <SearchModal />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<CategoryPage />} />
                <Route path="/article/:id" element={<ArticlePage />} />
                <Route path="/glossary" element={<GlossaryPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </SearchProvider>
    </HelmetProvider>
  );
};

export default App;