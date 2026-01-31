import React from 'react';
import { CATEGORIES } from '../data/content';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">AI בעברית</h3>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              אתר תוכן סמכותי שמטרתו ללמד את הקהל הישראלי איך לעבוד נכון, חכם ובטוח עם בינה מלאכותית.
              בלי הייפ, בלי מכירות, רק ידע.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">מדורים באתר</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.id}`} className="hover:text-blue-400 transition-colors">
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/glossary" className="hover:text-blue-400 transition-colors">
                  מילון מושגים
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Note */}
          <div className="text-sm text-slate-400">
            <h4 className="text-white font-semibold mb-4">חשוב לדעת</h4>
            <p className="mb-4">
              המידע באתר זה נועד למטרות חינוכיות בלבד. שימוש בכלי AI הוא באחריות המשתמש.
            </p>
            <p className="opacity-50 text-xs">
              © {new Date().getFullYear()} AI בעברית. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;