import {StyledButton} from './Button.style'

function Button ({children, type}) {
  return (
    <StyledButton type={type}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'lightGray'
}

export default Button