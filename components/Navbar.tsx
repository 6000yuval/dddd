import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain, Search } from 'lucide-react';
import { CATEGORIES } from '../data/content';
import { useSearch } from '../contexts/SearchContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openSearch } = useSearch();
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  // Helper to check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2" onClick={closeMenu}>
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <Brain className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-slate-900">AI בעברית</span>
                <span className="text-[10px] text-slate-500 font-medium">לעבוד נכון עם בינה מלאכותית</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${isActive('/') ? 'text-blue-600' : 'text-slate-600'}`}
            >
              בית
            </Link>
            {CATEGORIES.slice(0, 5).map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${isActive(`/category/${cat.id}`) ? 'text-blue-600' : 'text-slate-600'}`}
              >
                {cat.title}
              </Link>
            ))}
            <Link 
              to="/glossary" 
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${isActive('/glossary') ? 'text-blue-600' : 'text-slate-600'}`}
            >
              מילון מושגים
            </Link>
            
            {/* Search Trigger (Desktop) */}
            <button
              onClick={openSearch}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-500 text-sm transition-colors mr-2 group"
            >
              <Search className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
              <span>חיפוש...</span>
              <kbd className="hidden xl:inline-block text-[10px] bg-white border border-slate-200 rounded px-1 text-slate-400">⌘K</kbd>
            </button>
          </div>

          {/* Mobile Menu & Search */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={openSearch}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-md"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full left-0 top-16 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
            <Link
              to="/"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              בית
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(`/category/${cat.id}`) ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                {cat.title}
              </Link>
            ))}
            <Link
              to="/glossary"
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/glossary') ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              מילון מושגים
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;