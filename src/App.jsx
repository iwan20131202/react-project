import { useState, useEffect } from 'react';

import { Container } from './components/Container/Container.jsx';
import { GlobalStyle } from './styles/GlobalStyles.js';
import { Page, Main } from './App.styled.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HistoryList } from './components/HistoryList/HistoryList.jsx';
import { Header } from './components/Header/Header.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { WeatherList } from './components/WeatherList/WeatherList.jsx';
import { News } from './components/News/News.jsx';
import { Gallery } from './components/Gallery/Gallery.jsx';
import { Footer } from './components/Footer/Footer.jsx';

import { fetchWeather } from './services/weatherApi.js';
import { fetchNaturePhotos } from './services/pixabayApi.js';

function App() {
  const [weatherCards, setWeatherCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem('searchHistory') || '[]');
  });

  useEffect(() => {
    const loadCities = async () => {
      try {
        setLoading(true);
        const saved = localStorage.getItem('weatherCards');
        if (saved) {
          const parsed = JSON.parse(saved);
          const updated = await Promise.all(
            parsed.map(card => fetchWeather(card.name))
          );
          setWeatherCards(updated.map((item, index) => ({
            ...item,
            favorite: parsed[index].favorite || false,
          })));
        } else {
          const defaultCities = ['Kyiv', 'London', 'New York'];
          const cards = await Promise.all(
            defaultCities.map(city => fetchWeather(city))
          );
          setWeatherCards(cards.map(card => ({ ...card, favorite: false })));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadCities();
  }, []);

  useEffect(() => {
    localStorage.setItem('weatherCards', JSON.stringify(weatherCards));
  }, [weatherCards]);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const data = await fetchNaturePhotos();
        setPhotos(data);
      } catch (error) {
        console.error('Помилка завантаження фото:', error);
      }
    };
    getPhotos();
  }, []);

  const handleSearch = async city => {
    try {
      setLoading(true);
      const weather = await fetchWeather(city);
      
      setWeatherCards(prev => {
        const exists = prev.some(card => card.id === weather.id);
        if (exists) return prev;
        return [...prev, { ...weather, favorite: false }];
      });
    
      setHistory(prev => {
        const updated = [city, ...prev.filter(item => item !== city)].slice(0, 50);
        localStorage.setItem('searchHistory', JSON.stringify(updated));
        return updated;
      });

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async id => {
    try {
      const currentCard = weatherCards.find(card => card.id === id);
      if (!currentCard) return;
      const updated = await fetchWeather(currentCard.name);
      setWeatherCards(prev =>
        prev.map(card =>
          card.id === id ? { ...updated, favorite: card.favorite } : card
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavorite = id => {
    setWeatherCards(prev =>
      prev.map(card =>
        card.id === id ? { ...card, favorite: !card.favorite } : card
      )
    );
  };

  const deleteCard = id => {
    setWeatherCards(prev => prev.filter(card => card.id !== id));
  };

  return (
    <>
      <GlobalStyle />
      <Page>
        <Main>
          <Header />
          <ToastContainer />
          <Hero onSearch={handleSearch} />
          <Container>
            <WeatherList
              weatherCards={weatherCards}
              loading={loading}
              onDelete={deleteCard}
              onRefresh={handleRefresh}
              onFavorite={handleFavorite}
            />
            <News />
            {photos.length > 0 && <Gallery images={photos} />}
          </Container>
        </Main>
   
        <HistoryList history={history} />
        
        <Footer />
      </Page>
    </>
  );
}

export default App;