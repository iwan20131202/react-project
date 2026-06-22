import { useEffect, useState } from 'react';
import { getNews } from '../../services/newsApi.js';

import fallbackImage from '../../assets/images/News/Plug.jpg';

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

      {hasMore && (
        <Button onClick={handleLoadMore} disabled={loading}>
          {loading ? 'Loading...' : 'See more'}
        </Button>
      )}
    </Section>
  );
}