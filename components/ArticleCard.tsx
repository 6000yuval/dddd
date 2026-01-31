import React from 'react';
import { Article } from '../types';
import { Clock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/article/${article.id}`)}
      className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full"
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
        {article.description}
      </p>
      
      <div className="flex items-center justify-between text-slate-400 text-xs mt-auto pt-4 border-t border-slate-50">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{article.readTimeMinutes} דק' קריאה</span>
        </div>
        <div className="flex items-center gap-1 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <span>לקריאה</span>
          {/* In RTL, ArrowLeft points Left which is "forward" relative to text direction, but visually we might want to point left to indicate movement */}
          <ArrowLeft className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;