import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Clock, Loader2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import article images in correct sequence
import article1Image from 'figma:asset/fab477ab11e068aea97659987bebdd4c298f1a64.png';
import article2Image from 'figma:asset/d18be76c978d8ac3c7b7cce1a63158a14bedf1ce.png';
import article3Image from 'figma:asset/319ba5131a753a96ef04de71108bbcf1e8ae9a23.png';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  link: string;
  publishDate: string;
  readTime: string;
  imageUrl?: string;
}

// Image component for Article 1 - Remote Testing (collaborative workspace)
const Article1Image = ({ article }: { article: Article }) => {
  console.log('Article1Image rendering with:', article1Image);
  
  return (
    <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
      <ImageWithFallback
        src={article1Image}
        alt="Remote Testing Collaborative Workspace"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          console.error('Article 1 image failed to load:', article1Image);
        }}
        onLoad={() => {
          console.log('Article 1 image loaded successfully:', article1Image);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/70 to-slate-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

// Image component for Article 2 - Usability Heuristics Part II (Microsoft Word document)
const Article2Image = ({ article }: { article: Article }) => {
  console.log('Article2Image rendering with:', article2Image);
  
  return (
    <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
      <ImageWithFallback
        src={article2Image}
        alt="Usability Heuristics Microsoft Word Document"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          console.error('Article 2 image failed to load:', article2Image);
        }}
        onLoad={() => {
          console.log('Article 2 image loaded successfully:', article2Image);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/70 to-slate-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

// Image component for Article 3 - Usability Heuristics Part I (e-reader/tablet)
const Article3Image = ({ article }: { article: Article }) => {
  console.log('Article3Image rendering with:', article3Image);
  
  return (
    <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
      <ImageWithFallback
        src={article3Image}
        alt="Usability Heuristics E-reader Interface"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          console.error('Article 3 image failed to load:', article3Image);
        }}
        onLoad={() => {
          console.log('Article 3 image loaded successfully:', article3Image);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/70 to-slate-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default function ArticlesSection() {
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

  // Function to render the appropriate image component for each article position
  const renderArticleImage = (article: Article, index: number) => {
    const key = `article-image-${index}-${article.id}`;
    
    console.log(`=== Rendering Article ${index + 1} Image ===`, {
      title: article.title,
      index,
      key
    });
    
    // Simple position-based rendering to ensure all images show up
    switch (index) {
      case 0:
        console.log('Rendering Article1Image (collaborative workspace)');
        return <Article1Image key={key} article={article} />;
      case 1:
        console.log('Rendering Article2Image (Microsoft Word document)');
        return <Article2Image key={key} article={article} />;
      case 2:
        console.log('Rendering Article3Image (e-reader/tablet)');
        return <Article3Image key={key} article={article} />;
      default:
        console.log('No matching article component for index:', index);
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
  console.log('Image assets loaded:', {
    article1Image,
    article2Image,
    article3Image
  });

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
                    {renderArticleImage(article, index)}
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