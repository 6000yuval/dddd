import React from 'react';
import { Link } from 'react-router-dom';
import { GLOSSARY } from '../data/content';
import { ChevronLeft } from 'lucide-react';
import SEO from '../components/SEO';

const GlossaryPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="מילון מושגים" 
        description="מילון מונחי AI מקיף בעברית. הסברים פשוטים למושגים כמו LLM, Prompt, Hallucination ועוד." 
      />
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <nav className="flex items-center text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900">בית</Link>
            <ChevronLeft className="w-4 h-4 mx-2 text-slate-300" />
            <span className="text-slate-900 font-medium">מילון מושגים</span>
          </nav>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            מילון מושגים
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            הסברים קצרים וברורים למונחים הנפוצים בעולם הבינה המלאכותית, בלי סיבוכים מיותרים.
          </p>
        </div>
      </div>

      {/* Glossary List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {GLOSSARY.map((item) => (
            <div key={item.term} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                {item.term}
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;