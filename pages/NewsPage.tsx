
import React from 'react';
import { Card } from '../components/common/Card';
import { MOCK_NEWS_ARTICLES } from '../constants';
import type { NewsArticle } from '../types';

const NewsArticleCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <Card className="p-0 overflow-hidden group transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
    <div className="overflow-hidden">
      <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold uppercase tracking-wider bg-f1-red/20 text-f1-red px-2 py-1 rounded">{article.category}</span>
        <span className="text-xs text-gray-400">{article.date}</span>
      </div>
      <h3 className="text-xl font-extrabold text-white mb-3 flex-grow">{article.title}</h3>
      <p className="text-gray-300 text-sm mb-4">{article.summary}</p>
      <a href="#" className="mt-auto font-bold text-f1-red self-start hover:underline">
        Read More &rarr;
      </a>
    </div>
  </Card>
);

export const NewsPage: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold border-l-4 border-f1-red pl-4">Latest News</h1>
        <p className="mt-2 text-gray-400 pl-5">Your daily source for all breaking F1 stories, race reports, and technical insights.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_NEWS_ARTICLES.map(article => (
          <NewsArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
