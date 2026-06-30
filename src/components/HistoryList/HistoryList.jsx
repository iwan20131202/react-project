import { HistoryContainer, HistoryItem, HistoryTitle } from './HistoryList.styled.js';

export const HistoryList = ({ history }) => {
  if (!history || history.length === 0) return null;

  return (
    <HistoryContainer>
      <HistoryTitle>Recent searches:</HistoryTitle>
      {history.map((city, i) => (
        <HistoryItem key={i}>{city}</HistoryItem>
      ))}
    </HistoryContainer>
  );
};