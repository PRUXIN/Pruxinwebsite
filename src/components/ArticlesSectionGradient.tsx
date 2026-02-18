import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Clock, Loader2 } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  link: string;
  publishDate: string;
  readTime: string;
  imageUrl?: string;
}

// Gradient image components using JurAir branding colors
const Article1Gradient = ({ article }: { article: Article }) => {
  return (
    <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
      <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-red-500 transition-all duration-300 group-hover:from-blue-700 group-hover:via-blue-600 group-hover:to-red-600"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* Abstract tech pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid1)" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1" opacity="0.4"/>
          <circle cx="150" cy="150" r="25" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
        </svg>
      </div>
    </div>
  );
};

const Article2Gradient = ({ article }: { article: Article }) => {
  return (
    <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
      <div className="w-full h-full bg-gradient-to-br from-red-500 via-purple-500 to-blue-600 transition-all duration-300 group-hover:from-red-600 group-hover:via-purple-600 group-hover:to-blue-700"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* Abstract UX pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid2" width="15" height="15" patternUnits="userSpaceOnUse">
              <rect width="6" height="6" fill="white" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)" />
          <path d="M20,60 Q100,20 180,60 Q100,100 20,60" fill="none" stroke="white" strokeWidth="2" opacity="0.3"/>
        </svg>
      </div>
    </div>
  );
};

const Article3Gradient = ({ article }: { article: Article }) => {
  return (
    <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
      <div className="w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 transition-all duration-300 group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-purple-700"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* Abstract design pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid3" width="25" height="25" patternUnits="userSpaceOnUse">
              <circle cx="12.5" cy="12.5" r="8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid3)" />
          <polygon points="40,40 80,40 60,70" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
          <polygon points="120,130 160,130 140,160" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3"/>
        </svg>
      </div>
    </div>
  );
};

export default function ArticlesSectionGradient() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to extract text content from HTML
  const stripHtml = (html: string): string => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  // Function to extract image URL from content
  const extractImageUrl = (content: string): string | undefined => {
    if (!content) return undefined;
    
    const imgRegex = /<img[^>]+src="([^">]+)"/i;
    const match = content.match(imgRegex);
    
    if (match && match[1]) {
      let imageUrl = match[1];
      if (imageUrl.includes('cdn-images-1.medium.com') || imageUrl.includes('miro.medium.com')) {
        imageUrl = imageUrl.split('?')[0];
        return imageUrl;
      }
      return imageUrl;
    }
    
    return undefined;
  };

  // Function to calculate estimated read time
  const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const words = stripHtml(content).split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Function to create excerpt from content
  const createExcerpt = (content: string, maxLength: number = 200): string => {
    const text = stripHtml(content);
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  // Function to format publish date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Function to fetch Medium articles with multiple fallback strategies
  const fetchMediumArticles = async () => {
    setLoading(true);
    setError(null);

    // Mock data as the primary source (more reliable for portfolio)
    const mockArticles: Article[] = [
      {
        id: 'article-1',
        title: 'Remote Moderated Testing VS Remote Unmoderated Testing',
        excerpt: 'A comprehensive comparison between remote moderated and unmoderated testing methodologies, exploring the benefits and limitations of each approach for UX research.',
        link: 'https://medium.com/design-bootcamp/remote-moderated-testing-vs-remote-unmoderated-testing-20592a6ec78c',
        publishDate: 'Jan 22, 2022',
        readTime: '4 min read'
      },
      {
        id: 'article-2',
        title: 'Understand 10 Usability Heuristics for User Interface Design — Part II',
        excerpt: 'Continuing our exploration of Nielsen\'s usability heuristics, covering the remaining five principles that guide effective interface design.',
        link: 'https://medium.com/design-bootcamp/understand-10-usability-heuristics-for-user-interface-design-part-ii-bd83af4b719f',
        publishDate: 'Jan 10, 2022',
        readTime: '6 min read'
      },
      {
        id: 'article-3',
        title: 'Understand 10 Usability Heuristics for User Interface Design — Part I',
        excerpt: 'An in-depth exploration of Nielsen\'s first five usability heuristics and their practical application in modern user interface design.',
        link: 'https://medium.com/design-bootcamp/understand-10-usability-heuristics-for-user-interface-design-part-i-334a86b4ab0d',
        publishDate: 'Jan 10, 2022',
        readTime: '5 min read'
      }
    ];

    // For now, use mock data directly to avoid fetch issues
    // In a production environment, you might want to implement server-side RSS fetching
    setTimeout(() => {
      setArticles(mockArticles);
      setLoading(false);
      console.log('Articles loaded successfully:', mockArticles);
    }, 500);

    // Optional: Try to fetch from RSS feed in the background (non-blocking)
    // This won't affect the UI if it fails
    tryFetchRSSFeed();
  };

  // Background RSS fetch (non-blocking)
  const tryFetchRSSFeed = async () => {
    try {
      // Try multiple proxy services
      const proxyUrls = [
        `https://api.allorigins.win/get?url=${encodeURIComponent('https://medium.com/feed/@pranavraval87')}`,
        `https://cors-anywhere.herokuapp.com/https://medium.com/feed/@pranavraval87`,
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://medium.com/feed/@pranavraval87')}`
      ];

      for (const proxyUrl of proxyUrls) {
        try {
          const response = await fetch(proxyUrl, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            }
          });

          if (response.ok) {
            const data = await response.json();
            console.log('RSS feed fetched successfully (background):', data);
            // You could update the articles here if needed
            break;
          }
        } catch (proxyError) {
          console.log('Proxy failed, trying next:', proxyError);
          continue;
        }
      }
    } catch (error) {
      console.log('Background RSS fetch failed (this is expected):', error);
    }
  };

  useEffect(() => {
    fetchMediumArticles();
  }, []);

  const handleReadMore = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleSeeAllArticles = () => {
    window.open('https://medium.com/@pranavraval87', '_blank', 'noopener,noreferrer');
  };

  // Function to render the appropriate gradient component for each article position
  const renderArticleGradient = (article: Article, index: number) => {
    const key = `article-gradient-${index}-${article.id}`;
    
    console.log(`=== Rendering Article ${index + 1} Gradient ===`, {
      title: article.title,
      index,
      key
    });
    
    // Simple position-based rendering to ensure all gradients show up
    switch (index) {
      case 0:
        console.log('Rendering Article1Gradient (tech theme)');
        return <Article1Gradient key={key} article={article} />;
      case 1:
        console.log('Rendering Article2Gradient (UX theme)');
        return <Article2Gradient key={key} article={article} />;
      case 2:
        console.log('Rendering Article3Gradient (design theme)');
        return <Article3Gradient key={key} article={article} />;
      default:
        console.log('No matching gradient component for index:', index);
        return null;
    }
  };

  if (loading) {
    return (
      <section id="articles" className="py-24 px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What I've Been Writing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Insights on design, product strategy, and the future of user experience from my latest Medium articles.
            </p>
          </div>
          
          <div className="flex justify-center items-center py-16">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
            <span className="ml-3 text-white">Loading articles...</span>
          </div>
        </div>
      </section>
    );
  }

  console.log('Final articles rendering:', articles);

  return (
    <section id="articles" className="py-24 px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What I've Been Writing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Insights on design, product strategy, and the future of user experience from my latest Medium articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => {
            console.log(`Mapping article ${index + 1}:`, article.title);
            return (
              <Card
                key={`article-card-${index}-${article.id}`}
                className="group cursor-pointer border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden"
                onClick={() => handleReadMore(article.link)}
              >
                <CardContent className="p-0">
                  <div className="p-6 pb-0">
                    {renderArticleGradient(article, index)}
                  </div>

                  <div className="px-6 pb-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-slate-200 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-300 mb-6 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-6">
                      <span>Medium</span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReadMore(article.link);
                      }}
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-200"
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={handleSeeAllArticles}
            variant="outline"
            size="lg"
            className="bg-transparent border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105"
          >
            See all articles
          </Button>
        </div>
      </div>
    </section>
  );
}