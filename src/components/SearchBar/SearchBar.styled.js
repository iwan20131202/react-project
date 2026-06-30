import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 625px;
  height: 42px;
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  background-color: #d9d9d9;
  margin: 145px auto 0;

  @media (max-width: 1199px) {
    width: 402px;
    height: 27px;
    margin-top: 64px;
  }

  @media (max-width: 767px) {
    width: 173px;
    height: 15px;
    border-radius: 5px;
    margin-top: 48px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 12px 29px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #878787;

  &::placeholder {
    color: #878787;
  }

  @media (max-width: 1199px) {
    padding: 8px 19px;
    font-size: 10px;
  }

  @media (max-width: 767px) {
    padding: 4px 10px;
    font-size: 6px;
  }
`;

export const SearchButton = styled.button`
  width: 45px;
  border-left: 2px solid #000;
  background-color: #ffb36c;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;

  svg {
    font-size: 25px;
    color: #000;
    flex-shrink: 0;
  }

  @media (max-width: 1199px) {
    width: 28px;

    svg {
      font-size: 16px;
    }
  }

  @media (max-width: 767px) {
    width: 16px;

    svg {
      font-size: 9px;
    }
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 625px;
  background-color: #2c2c2c;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  padding: 10px 0;
  margin: 0;
  list-style: none;
  z-index: 1000;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  max-height: 300px;
  overflow-y: auto;

  @media (max-width: 1199px) {
    width: 402px;
  }

  @media (max-width: 767px) {
    width: 173px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const DropdownItem = styled.li`
  padding: 10px 29px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #444;
  }

  @media (max-width: 1199px) {
    padding: 8px 19px;
    font-size: 10px;
  }

  @media (max-width: 767px) {
    padding: 4px 10px;
    font-size: 6px;
  }
`;
