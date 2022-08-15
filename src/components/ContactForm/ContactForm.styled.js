import { Form, Field } from 'formik';
import styled from 'styled-components';
import Button from 'components/Button';

export const FormContainer = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 35px;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 10px;

  :focus {
    border: 1px solid orange;
  }
`;

export const AddButton = styled(Button)`
  font-weight: 700;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  border-radius: 10px;
  background-color: #45f5e6;
  border: none;
  transition: all 250ms linear;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
