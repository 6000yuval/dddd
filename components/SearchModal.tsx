import React, { useState, useEffect, useMemo } from 'react';
import { useSearch } from '../contexts/SearchContext';
import { ARTICLES, GLOSSARY, CATEGORIES } from '../data/content';
import { Search, X, ChevronLeft, Sparkles, BookOpen, AlertCircle, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import ReactMarkdown from 'react-markdown';

const SearchModal: React.FC = () => {
  const { isOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'search' | 'ai'>('search');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const navigate = useNavigate();

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setAiResponse('');
      setActiveTab('search');
    }
  }, [isOpen]);

  // Configure Fuse.js
  const fuse = useMemo(() => {
    const searchData = [
      ...ARTICLES.map(a => ({ ...a, type: 'article' as const })),
      ...GLOSSARY.map(g => ({ ...g, title: g.term, description: g.definition, type: 'glossary' as const, id: 'glossary' }))
    ];
    
    return new Fuse(searchData, {
      keys: ['title', 'description', 'term', 'definition'],
      threshold: 0.4, // Fuzzy matching sensitivity
      includeScore: true
    });
  }, []);

  const searchResults = useMemo(() => {
    if (!query) return [];
    return fuse.search(query).map(result => result.item).slice(0, 5);
  }, [query, fuse]);

  const handleNavigate = (path: string) => {
    navigate(path);
    closeSearch();
  };

  const handleAiAsk = async () => {
    if (!query.trim()) return;
    setIsAiLoading(true);
    setAiResponse('');
    
    try {
      // Dynamic import to prevent crash on initial load if SDK fails
      const { GoogleGenAI } = await import("@google/genai");

      // Get API key from injected environment variables
      const apiKey = typeof window !== 'undefined' 
        ? (window as any).__ENV_GEMINI_API_KEY__ 
        : undefined;
      
      if (!apiKey) {
        setAiResponse("שגיאה: מפתח ה-API לא נמצא. אנא ודא שהגדרת את GEMINI_API_KEY בקובץ .env.");
        setIsAiLoading(false);
        return;
      }

      const ai = new GoogleGenerativeAI({ apiKey });

      // Build context from site content
      const siteContext = ARTICLES.map(a => `- ${a.title}: ${a.description}`).join('\n');
      const glossaryContext = GLOSSARY.map(g => `- ${g.term}: ${g.definition}`).join('\n');
      
      const systemInstruction = `
        אתה עוזר חכם באתר "AI בעברית". 
        המטרה שלך היא לענות לשאלות משתמשים על בינה מלאכותית בהתבסס על תוכן האתר בלבד.
        
        הנה רשימת המאמרים באתר והתקציר שלהם:
        ${siteContext}

        הנה מילון המושגים באתר:
        ${glossaryContext}

        הנחיות:
        1. ענה בעברית ברורה וקצרה.
        2. אם התשובה נמצאת במאמר ספציפי, ציין את שם המאמר והמליץ למשתמש לקרוא אותו.
        3. אל תמציא מידע שלא קיים בהקשר שניתן לך, אך השתמש בידע הכללי שלך כדי לחבר את הנקודות.
        4. היה מנומס ועוזר.
      `;

      const response = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents: query,
        config: {
          systemInstruction: systemInstruction,
          maxOutputTokens: 300,
        }
      });

      for await (const chunk of response) {
        if (chunk.text) {
          setAiResponse(prev => prev + chunk.text);
        }
      }

    } catch (error) {
      console.error("AI Error:", error);
      setAiResponse("סליחה, נתקלתי בבעיה בחיבור לשרת או בטעינת המודל.");
    } finally {
      setIsAiLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" 
        onClick={closeSearch}
      />

      {/* Modal */}
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[80vh]">
        
        {/* Search Header */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            className="flex-1 text-lg outline-none placeholder:text-slate-400 text-slate-800 bg-transparent"
            placeholder="חיפוש באתר (לדוגמה: פרומפט, אוטומציה, איך להתחיל...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && activeTab === 'ai') {
                handleAiAsk();
              }
            }}
            autoFocus
          />
          <button onClick={closeSearch} className="p-1 hover:bg-slate-100 rounded-full text-slate-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        {query && (
          <div className="flex border-b border-slate-100">
            <button
              onClick={() => setActiveTab('search')}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'search' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              תוצאות חיפוש
            </button>
            <button
              onClick={() => {
                setActiveTab('ai');
                if (!aiResponse && !isAiLoading) handleAiAsk();
              }}
              className={`flex-1 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${activeTab === 'ai' ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <Sparkles className="w-4 h-4" />
              שאל את ה-AI
            </button>
          </div>
        )}

        {/* Content Area */}
        <div className="overflow-y-auto p-4 min-h-[300px]">
          
          {/* Default Empty State */}
          {!query && (
            <div className="text-center py-12 text-slate-400">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>התחילו להקליד כדי לחפש מדריכים, מושגים ועוד.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {['איך מתחילים', 'הנדסת פרומפט', 'אוטומציה', 'בטיחות'].map(term => (
                  <button 
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-600 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {activeTab === 'search' && query && (
            <div className="space-y-2">
              {searchResults.length > 0 ? (
                searchResults.map((result: any, index) => (
                  <div 
                    key={index}
                    onClick={() => handleNavigate(result.type === 'glossary' ? '/glossary' : `/article/${result.id}`)}
                    className="p-3 hover:bg-slate-50 rounded-lg cursor-pointer group transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {result.type === 'glossary' ? (
                          <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">מושג</span>
                        ) : (
                          <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-bold">מאמר</span>
                        )}
                        <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {result.title || result.term}
                        </h4>
                      </div>
                      <ChevronLeft className="w-4 h-4 text-slate-300 group-hover:text-blue-400" />
                    </div>
                    <p className="text-sm text-slate-500 line-clamp-1">
                      {result.description || result.definition}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <AlertCircle className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                  <p>לא נמצאו תוצאות לחיפוש זה.</p>
                  <button onClick={() => setActiveTab('ai')} className="text-purple-600 hover:underline text-sm mt-2">
                    נסה לשאול את ה-AI במקום &rarr;
                  </button>
                </div>
              )}
            </div>
          )}

          {/* AI Tab */}
          {activeTab === 'ai' && query && (
            <div className="space-y-4">
               {isAiLoading && !aiResponse ? (
                 <div className="flex flex-col items-center justify-center py-12 text-slate-400 animate-pulse">
                   <Sparkles className="w-8 h-8 mb-4 text-purple-400 animate-spin" />
                   <p>חושב על התשובה...</p>
                 </div>
               ) : (
                 <div className="prose prose-sm prose-slate max-w-none bg-purple-50/30 p-4 rounded-xl border border-purple-100">
                   <div className="flex items-center gap-2 text-purple-700 font-bold mb-2 text-xs uppercase tracking-wider">
                     <Sparkles className="w-3 h-3" />
                     תשובת AI
                   </div>
                   <ReactMarkdown>{aiResponse}</ReactMarkdown>
                 </div>
               )}
               
               {!isAiLoading && aiResponse && (
                 <div className="text-xs text-center text-slate-400 mt-4">
                   * התשובה מבוססת על תוכן האתר ומופקת על ידי בינה מלאכותית. ייתכנו אי-דיוקים.
                 </div>
               )}
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-slate-50 p-3 border-t border-slate-100 text-[10px] text-slate-400 flex justify-between items-center">
          <div className="flex gap-4">
            <span><kbd className="bg-white border border-slate-200 rounded px-1 font-sans">Enter</kbd> לבחירה</span>
            <span><kbd className="bg-white border border-slate-200 rounded px-1 font-sans">Esc</kbd> לסגירה</span>
          </div>
          <div className="flex items-center gap-1">
             מופעל ע"י <span className="font-bold">Google Gemini</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;