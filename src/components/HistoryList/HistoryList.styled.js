import styled from "styled-components";

export const HistoryContainer = styled.div`
  max-width: 800px;
  margin: 40px auto 20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const HistoryTitle = styled.h4`
  width: 100%;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

export const HistoryItem = styled.span`
  padding: 5px 15px;
  background: #d9d9d9; /* Колір як у вашому SearchBar */
  border-radius: 15px;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: #555;

  /* Статичний вигляд - ніякої реакції на мишу */
  cursor: default;

  &:hover {
    background: #d9d9d9;
  }
`;
