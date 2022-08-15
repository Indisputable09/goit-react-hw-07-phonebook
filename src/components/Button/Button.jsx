import { ButtonStyled } from './Button.styled';

const Button = ({
  type = 'button',
  children,
  isDeleting,
  click,
  // className,
}) => {
  return (
    <ButtonStyled
      type={type}
      onClick={click}
      disabled={isDeleting}
      // className={className}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
