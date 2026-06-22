import {
  FooterWrapper,
  FooterContainer,
  Logo,
  InfoBlock,
  Title,
  Text,
  Socials,
  SocialLink,
  SocialIcon,
} from './Footer.styled.js';


import logo from "../../assets/images/Header/logo.png";
import instagram from "../../assets/icons/Instagram.png";
import facebook from "../../assets/icons/Facebook.png";
import whatsapp from "../../assets/icons/Whatsapp.png";


export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Logo src={logo} alt="Logo" />

        <InfoBlock>
          <Title>Address</Title>
          <Text>Svobody str. 35</Text>
          <Text>Kyiv</Text>
          <Text>Ukraine</Text>
        </InfoBlock>

        <InfoBlock>
          <Title>Contact us</Title>

          <Socials>
            <SocialLink href="https://www.instagram.com/" target="_blank">
              <SocialIcon src={instagram} alt="Instagram" />
            </SocialLink>

            <SocialLink href="https://www.facebook.com/" target="_blank">
              <SocialIcon src={facebook} alt="Facebook" />
            </SocialLink>

            <SocialLink
              href="https://www.whatsapp.com/?lang=uk"
              target="_blank"
            >
              <SocialIcon src={whatsapp} alt="WhatsApp" />
            </SocialLink>
          </Socials>
        </InfoBlock>
      </FooterContainer>
    </FooterWrapper>
  );
};
