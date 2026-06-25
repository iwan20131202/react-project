import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 60px auto;
  padding: 40px 77px;
  background: #e8e8e8;
  border-radius: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 58px;
`;

export const Item = styled.div`
  height: 217px;
  padding: 20px;
  background: #d9d9d9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const Value = styled.p`
  margin: 10px 0;
  font-size: 32px;
  font-weight: 500;
`;

export const Icon = styled.div`
  margin-top: 23px;
  width: 85px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
