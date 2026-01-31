import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Target, Layers } from 'lucide-react';
import { CATEGORIES, ARTICLES } from '../data/content';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  // Get the latest article for each category
  const latestArticlesByCategory = CATEGORIES.map(cat => {
    const articles = ARTICLES.filter(a => a.categoryId === cat.id);
    if (articles.length === 0) return null;
    // Just get the first one from the list as "latest" for now since we don't have real dates
    return { category: cat, article: articles[0] };
  }).filter((item): item is { category: typeof CATEGORIES[0], article: typeof ARTICLES[0] } => Boolean(item));

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="דף הבית" 
        description="המדריך המלא והסמכותי לעבודה נכונה עם בינה מלאכותית (AI) בישראל. מדריכים מעשיים, טיפים למקצוענים והסברים בגובה העיניים."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-16 pb-20 md:pt-24 md:pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            המדריך המלא לעבודה עם AI
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            בינה מלאכותית בעברית <br/>
            <span className="text-blue-600">להבין, לעבוד, ולהעמיק</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            לא איך להשתמש ב-AI, אלא איך להשתמש בו <strong>נכון</strong>.
            <br className="hidden md:block" />
            אנחנו כאן כדי ללמד אתכם מיומנות חדשה: לנהל שיחה חכמה, נשלטת ואפקטיבית.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/category/basics" 
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              התחילו כאן
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link 
              to="/category/skills" 
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              שיפור מיומנויות
            </Link>
          </div>
        </div>
      </section>

      {/* Main Navigation Grid */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">כל המדריכים</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className="group p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white flex flex-col items-start text-right relative overflow-hidden"
              >
                {/* Colored accent background */}
                <div className={`absolute top-0 right-0 w-full h-1 ${category.color.replace('bg-', 'bg-opacity-50 bg-')}`} />
                
                <div className={`p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform ${category.color}`}>
                  {category.icon && React.isValidElement(category.icon)
                    ? React.cloneElement(category.icon as React.ReactElement<any>, { className: "text-slate-800" })
                    : null}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="mt-auto text-blue-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  למעבר למדור <ArrowLeft className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      {latestArticlesByCategory.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">מתוך המדריכים</h2>
            <p className="text-slate-600 mb-10">טעימה מהתוכן באתר</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticlesByCategory.slice(0, 6).map(({ category, article }) => (
                <div key={article.id} className="flex flex-col">
                  <Link 
                    to={`/category/${category.id}`} 
                    className="text-xs font-bold text-slate-500 mb-2 hover:text-blue-600 inline-flex items-center gap-1 self-start uppercase tracking-wider"
                  >
                    {category.title}
                  </Link>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default Home;