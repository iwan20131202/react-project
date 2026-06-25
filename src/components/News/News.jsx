import { useEffect, useState } from 'react';
import { getNews } from '../../services/newsApi.js';

import fallbackImage from '../../assets/images/News/Plug.jpg';

import { IoMdClose } from 'react-icons/io'; 

import {
  Section,
  Title,
  Grid,
  Card,
  Image,
  Text,
  Button,
} from './News.styled.js';

export function News() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadNews = async pageNumber => {
    try {
      setLoading(true);
      const data = await getNews(pageNumber);

      if (!data || data.length === 0) {
        setHasMore(false);
        return;
      }

      setArticles(prev => {
        const existingUrls = new Set(prev.map(a => a.url));
        const unique = data.filter(
          article => article.url && !existingUrls.has(article.url)
        );
        return [...prev, ...unique];
      });

      if (data.length < 4) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews(page);
  }, [page]);

  const handleLoadMore = () => {
    if (!loading) {
      setPage(prev => prev + 1);
    }
  };

  
  const handleCollapseNews = () => {
    setArticles(prev => prev.slice(0, 4));
    setPage(1);
    setHasMore(true);
  };

  return (
    <Section>
      <Title>Interacting with our pets</Title>

      <Grid>
        {articles.map(article => (
          <Card
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noreferrer"
          >
            <Image>
              <img
                src={article.urlToImage || fallbackImage}
                alt={article.title || 'News image'}
              />
            </Image>

            <Text>{article.title}</Text>
          </Card>
        ))}
      </Grid>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginTop: '30px' }}>
        {hasMore && (
          <Button onClick={handleLoadMore} disabled={loading}>
            {loading ? 'Loading...' : 'See more'}
          </Button>
        )}
        
       
        {page > 1 && (
          <button
            onClick={handleCollapseNews}
            style={{
              background: '#e8e8e8',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '22px',
              padding: '10px 15px',
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d9d9d9'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e8e8e8'}
            title="Свернуть доп. новости"
          >
            <IoMdClose />
          </button>
        )}
      </div>
    </Section>
  );
}
