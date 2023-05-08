import { StyledButton } from './Button.style'

function Button({ children, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'lightGray',
}

export default Button
