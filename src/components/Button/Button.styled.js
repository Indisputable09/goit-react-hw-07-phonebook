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
    background-color: ${p => p.theme.colors.orangered};
    transform: scale(0.9);
  }
`;

export const CloseButton = styled(ButtonStyled)`
  position: absolute;
  top: 2%;
  right: 2%;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 50%; */
`;
