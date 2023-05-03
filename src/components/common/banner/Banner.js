import { Container } from './Banner.style'

function Banner({color}) {
  return (
    <Container color={color}>
      <strong>dfssdfdf</strong>
    </Container>
  )
}

Banner.defaultProps = {
  color: 'blue',
}

export default Banner
