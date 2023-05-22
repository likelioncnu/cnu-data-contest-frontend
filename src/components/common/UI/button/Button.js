import { StyledButton } from './Button.style'

function Button({ children, type, size, onClick }) {
  return (
    <StyledButton type={type} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'lightGray',
}

export default Button
