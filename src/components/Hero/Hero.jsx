import { SearchBar } from '../SearchBar/SearchBar.jsx';

import {
  HeroSection,
  Overlay,
  Content,
  Title,
  InfoBlock,
  LeftText,
  RightText,
  Divider,
} from './Hero.styled.js';


export const Hero = ({ onSearch }) => {
  const now = new Date();

  const monthYear = now.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const weekdayDay = `${now.toLocaleDateString('en-US', {
    weekday: 'long',
  })}, ${now.getDate()}${getDaySuffix(now.getDate())}`;

  return (
    <HeroSection>
      <Overlay />

      <Content>
        <Title>Weather dashboard</Title>

        <InfoBlock>
          <LeftText>
            Create your personal list of favorite cities and always be aware of
            the weather.
          </LeftText>

          <Divider />

          <RightText>
            {monthYear}
            <br />
            {weekdayDay}
          </RightText>
        </InfoBlock>

        <SearchBar onSearch={onSearch} />
      </Content>
    </HeroSection>
  );
};

function getDaySuffix(day) {
  if (day > 3 && day < 21) return 'th';

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}