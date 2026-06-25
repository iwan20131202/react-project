import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 550px;
  margin: 80px auto;
  padding: 25px 15px;
  background: #e8e8e8;
  border-radius: 20px;

  .chart {
    height: calc(100% - 30px);
  }
`;

export const Title = styled.h3`
  margin: 0 0 5px 40px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
`;
