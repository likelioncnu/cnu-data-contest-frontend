import { Container } from './Banner.style'

function Banner({color}) {
  return (
    <Container color={color}>
      <strong>Banner</strong>
    </Container>
  )
}

Banner.defaultProps = {
  color: 'blue',
}

export default Banner
