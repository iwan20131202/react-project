

import { useState } from 'react';

import { GlobalStyle } from './styles/GlobalStyles.js';
import { Page, Main } from './App.styled.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/Header/Header.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { List } from './components/List/List.jsx'; 
import { News } from './components/News/News.jsx';
import { Footer } from './components/Footer/Footer.jsx'; 

import { fetchWeather } from './services/weatherApi.js';

function App() {
  const [weatherCards, setWeatherCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async city => {
    try {
      setLoading(true);

      const weather = await fetchWeather(city);

      setWeatherCards(prev => {
        const exists = prev.some(item => item.id === weather.id);

        if (exists) {
          return prev;
        }

        return [...prev, weather];
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
          
        
          <List
            weatherCards={weatherCards}
            loading={loading}
            onDelete={deleteCard}
          />
          
          <News />
        </Main>
        <Footer />
      </Page>
    </>
  );
}

export default App;
