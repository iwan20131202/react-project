import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #ffb36c;
  height: 179px;

  @media (max-width: 1199px) {
    height: auto;
    padding: 20px 0;
  }

  @media (max-width: 767px) {
    height: auto;
    padding: 30px 0;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0;
  padding-left: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 100px;

  @media (max-width: 1199px) {
    padding-left: 100px;
    gap: 60px;
  }

  @media (max-width: 767px) {
    padding-left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 90px;
  height: auto;

  @media (max-width: 1199px) {
    width: 70px;
  }

  @media (max-width: 767px) {
    width: 50px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    align-items: center;
  }
`;

export const Title = styled.h3`
  margin: 0 0 10px;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1199px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: 767px) {
    font-size: 11px;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;

  @media (max-width: 1199px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;
