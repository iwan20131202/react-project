import { useEffect } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import {
  Backdrop,
  Modal,
  Title,
  StyledForm,
  Label,
  FieldWrapper,
  StyledInput,
  ErrorText,
  SubmitButton,
  BottomText,
  LoginLink,
} from './Modal.styled.js';

const registerSchema = Yup.object({
  username: Yup.string()
    .min(2, 'Minimum 2 symbols')
    .required('Username is required'),

  email: Yup.string().email('Invalid email').required('Email is required'),

  password: Yup.string()
    .min(6, 'Minimum 6 symbols')
    .required('Password is required'),
});

export const RegisterModal = ({ isOpen, onClose, onRegister }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = values => {
    const userData = {
      username: values.username,
      email: values.email,
    };

    localStorage.setItem('user', JSON.stringify(userData));

    onRegister(userData);

    toast.success('Registration successful!');

    onClose();
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <Title>Sign up</Title>

        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <StyledForm>
              <FieldWrapper>
                <Label htmlFor="username">Username</Label>

                <Field
                  as={StyledInput}
                  id="username"
                  name="username"
                  placeholder="Username"
                />

                <ErrorMessage name="username" component={ErrorText} />
              </FieldWrapper>

              <FieldWrapper>
                <Label htmlFor="email">E-Mail</Label>

                <Field
                  as={StyledInput}
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                />

                <ErrorMessage name="email" component={ErrorText} />
              </FieldWrapper>

              <FieldWrapper>
                <Label htmlFor="password">Password</Label>

                <Field
                  as={StyledInput}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />

                <ErrorMessage name="password" component={ErrorText} />
              </FieldWrapper>

              <SubmitButton type="submit">Sign up</SubmitButton>

              <BottomText>
                Already have an account? <LoginLink href="#">Log In</LoginLink>
              </BottomText>
            </StyledForm>
          )}
        </Formik>
      </Modal>
    </Backdrop>
  );
};