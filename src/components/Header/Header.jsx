import { useEffect, useState } from 'react';
import { RegisterModal } from '../Modal/Modal.jsx';

import { IoChevronDown, IoChevronForward } from 'react-icons/io5';

import {
  HeaderWrapper,
  HeaderContainer,
  Left,
  LogoImg,
  Nav,
  NavList,
  NavItem,
  Right,
  SignButton,
  UserName,
  Avatar,
  MobileMenuBtn,
  MobileMenu,
  MobileNav,
  MobileRight,
} from './Header.styled.js';

import logo from '../../assets/images/Header/logo.png';
import userIcon from '../../assets/images/Header/avatar.png';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleRegister = userData => {
    setUser(userData);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Left>
            <LogoImg src={logo} alt="logo" />
          </Left>

          <Nav>
            <NavList>
              <NavItem>Who we are</NavItem>
              <NavItem>Contacts</NavItem>
              <NavItem>Menu</NavItem>
            </NavList>
          </Nav>

          <Right>
            {!user && (
              <SignButton onClick={() => setIsModalOpen(true)}>
                Sign Up
              </SignButton>
            )}

            {user && <UserName>{user.username}</UserName>}

            <Avatar src={userIcon} alt="user" />
          </Right>

          <MobileMenuBtn onClick={() => setIsOpen(!isOpen)}>
            Menu {isOpen ? <IoChevronForward /> : <IoChevronDown />}
          </MobileMenuBtn>
        </HeaderContainer>
      </HeaderWrapper>

      {isOpen && (
        <MobileMenu>
          <MobileNav>
            <NavItem>Who we are</NavItem>
            <NavItem>Contacts</NavItem>
            <NavItem>Menu</NavItem>
          </MobileNav>

          <MobileRight>
            <Avatar src={userIcon} alt="user" />

            {!user && (
              <SignButton onClick={() => setIsModalOpen(true)}>
                Sign Up
              </SignButton>
            )}

            {user && <UserName>{user.username}</UserName>}
          </MobileRight>
        </MobileMenu>
      )}

      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRegister={handleRegister}
      />
    </>
  );
};