import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES, CATEGORIES } from '../data/content';
import ArticleCard from '../components/ArticleCard';
import { ChevronLeft } from 'lucide-react';
import SEO from '../components/SEO';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const category = CATEGORIES.find(c => c.id === id);
  const categoryArticles = ARTICLES.filter(a => a.categoryId === id);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <SEO title="מדור לא נמצא" description="המדור שחיפשת אינו קיים." />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">המדור לא נמצא</h2>
        <Link to="/" className="text-blue-600 hover:underline">חזרה לדף הבית</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title={category.title} 
        description={category.description} 
      />
      
      {/* Category Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <nav className="flex items-center text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900">בית</Link>
            <ChevronLeft className="w-4 h-4 mx-2 text-slate-300" />
            <span className="text-slate-900 font-medium">{category.title}</span>
          </nav>
          
          <div className="flex items-start gap-6">
            <div className={`hidden md:flex p-4 rounded-2xl text-slate-800 ${category.color}`}>
              {category.icon && React.isValidElement(category.icon)
                ? React.cloneElement(category.icon as React.ReactElement<any>, { className: "w-8 h-8" })
                : null}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                {category.title}
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
            <p className="text-xl text-slate-500 mb-4">טרם פורסמו מאמרים במדור זה.</p>
            <p className="text-slate-400">אנחנו עובדים על תוכן איכותי שיעלה בקרוב.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;