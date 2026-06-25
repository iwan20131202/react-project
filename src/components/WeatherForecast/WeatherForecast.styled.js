import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1140px;
  padding: 26px 76px;
  border-radius: 20px;
  background: #e8e8e8;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

export const ForecastRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  padding: 14px 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: #d9d9d9;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DateText = styled.span`
  min-width: 80px;
  font-size: 16px;
  font-weight: 500;
`;

export const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const WeatherIcon = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
`;

export const Temp = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const Description = styled.span`
  min-width: 140px;
  text-align: right;
  font-size: 16px;
  font-weight: 500;
  text-transform: lowercase;
`;
