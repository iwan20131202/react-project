import styled from "styled-components";
import { Form } from "formik";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f5f5f5;
  border-radius: 32px;
  padding: 28px 80px;

  @media (max-width: 1199px) {
    max-width: 400px;
    padding: 30px 45px;
    border-radius: 28px;
  }

  @media (max-width: 767px) {
    max-width: 295px;
    padding: 25px;
    border-radius: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 40px;

  @media (max-width: 1199px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;

  @media (max-width: 1199px) {
    font-size: 12px;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 30px;

  @media (max-width: 1199px) {
    margin-bottom: 25px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding: 17px 20px;
  background: #e4e4e4;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  outline: none;

  &:focus {
    border: 1px solid #e8b35c;
  }

  &::placeholder {
    color: #ababab;
  }

  @media (max-width: 1199px) {
    height: 40px;
    padding: 12px 20px;
    font-size: 12px;
  }
`;

export const ErrorText = styled.p`
  color: #da0000;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  margin-top: 6px;

  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

export const SubmitButton = styled.button`
  width: 114px;
  height: 37px;
  margin: 5px auto 15px;
  border: none;
  border-radius: 10px;
  background: #ffb36c;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: transform 250ms;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }

  @media (max-width: 1199px) {
    width: 107px;
    height: 35px;
    font-size: 12px;
  }
`;

export const BottomText = styled.p`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 10px;

  @media (max-width: 767px) {
    font-size: 9px;
  }
`;

export const LoginLink = styled.a`
  color: #000;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`;
