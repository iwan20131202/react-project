import styled from "styled-components";
import bg from "../../assets/images/Hero/hero.jpg";

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  height: 595px;

  @media (max-width: 1199px) {
    height: 345px;
  }

  @media (max-width: 767px) {
    height: 345px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.48);
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 720px;
  color: white;
  text-align: center;
  padding-top: 72px;

  @media (max-width: 1199px) {
    max-width: 410px;
    padding-top: 40px;
  }

  @media (max-width: 767px) {
    max-width: 180px;
    padding-top: 48px;
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 40px;
  margin: 0 0 80px;

  @media (max-width: 1199px) {
    font-size: 20px;
    margin-bottom: 24px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 35px;
  }
`;

export const InfoBlock = styled.div`
  position: relative;
  width: 100%;
  height: 145px;
  margin-bottom: 80px;

  @media (max-width: 1199px) {
    height: 110px;
    margin-bottom: 64px;
  }

  @media (max-width: 767px) {
    width: 165px;
    height: 80px;
    margin: 0 auto 45px;
  }
`;

export const LeftText = styled.p`
  position: absolute;
  right: calc(50% + 35px);
  top: 0;
  width: 345px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.15;
  text-align: right;
  margin: 0;

  @media (max-width: 1199px) {
    width: 185px;
    right: calc(50% + 22px);
    font-size: 14px;
  }

  @media (max-width: 767px) {
    left: 40px;
    right: auto;
    width: 140px;

    text-align: left;
    font-size: 10px;
    line-height: 1.2;
  }
`;

export const Divider = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 3px;
  height: 144px;
  background: rgba(255, 255, 255, 0.9);

  @media (max-width: 1199px) {
    height: 110px;
  }

  @media (max-width: 767px) {
    left: 12px;
    transform: none;
    height: 80px;
  }
`;

export const RightText = styled.p`
  position: absolute;
  left: calc(50% + 38px);
  top: 0;
  width: 220px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.15;
  text-align: left;
  margin: 0;

  @media (max-width: 1199px) {
    left: calc(50% + 25px);
    width: 110px;
    font-size: 14px;
  }

  @media (max-width: 767px) {
    left: 40px;
    top: 55px;
    width: 70px;

    font-size: 10px;
    line-height: 1.2;
  }
`;
