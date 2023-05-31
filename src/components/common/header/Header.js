import { Container, Logo } from './Header.style'
import logo from '../../../assets/images/logo.svg'

function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
    </Container>
  )
}

export default Header
