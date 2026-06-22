import styled from "styled-components";

export const Card = styled.div`
  width: 320px;
  padding: 15px 30px;
  border-radius: 20px;
  background: #e8e8e8;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const City = styled.h3`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

export const Country = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
`;

export const Time = styled.h2`
  margin: 15px 0;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

export const ForecastButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const ForecastButton = styled.button`
  padding: 8px 18px;
  border: none;
  border-radius: 10px;
  background-color: #ffb36c;
  cursor: pointer;
  font-size: 10px;
  font-family: "Montserrat", sans-serif;
  text-align: right;
  font-weight: 500;
`;

export const DateRow = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 14px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  text-align: right;
  font-weight: 500;
`;

export const WeatherIcon = styled.img`
  width: 120px;
  height: 120px;
  margin: 22px auto 15px;
`;

export const Temperature = styled.h1`
  margin: 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 500;
`;

export const Footer = styled.div`
  margin-top: 39px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 30px;
`;

export const FavoriteButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 30px;
`;

export const DeleteButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 30px;
`;

export const MoreButton = styled.button`
  padding: 8px 25px;
  border: none;
  border-radius: 10px;
  background-color: #ffb36c;
  cursor: pointer;
  font-size: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  text-align: right;
`;
