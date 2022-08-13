import styled from 'styled-components';

export const ButtonStyled = styled.button`
  /* width: 200px; */
  padding: 15px 50px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  transition: all 250ms linear;

  :hover,
  :focus {
    /* background-color: #fa5c71; */
    background-color: ${p => p.theme.colors.orangered};
    transform: scale(0.9);
  }
`;
