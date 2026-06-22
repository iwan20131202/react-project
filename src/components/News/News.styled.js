import styled from "styled-components";

export const Section = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding: 80px 16px 18px;
`;

export const Title = styled.h2`
  margin: 0 0 40px;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 500;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Card = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Image = styled.div`
  width: 100%;
  height: 208px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 500;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 138px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #ffb36c;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
