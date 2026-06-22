import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 150px;
  background: #fff;

  @media (max-width: 1199px) {
    height: 70px;
    padding: 17px 100px;
  }

  @media (max-width: 767px) {
    height: 50px;
    padding: 14px 50px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 56px;

  @media (max-width: 1199px) {
    height: 36px;
  }

  @media (max-width: 767px) {
    height: 22px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 42px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1199px) {
    gap: 45px;
  }
`;

export const NavItem = styled.li`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;
  font-size: 12;
  color: #000;
  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const SignButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  background: #ffb36c;
  color: #000;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
`;

export const UserName = styled.span`
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

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const MobileMenuBtn = styled.button`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    gap: 5px;
    background: none;
    border: none;
    font-family: "Montserrat Alternates";
    font-size: 10px;
    font-weight: 500;
    cursor: pointer;
  }

  svg {
    font-size: 10px;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px 50px;
    background: #e6e6e6;
  }
`;

export const MobileNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MobileRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
