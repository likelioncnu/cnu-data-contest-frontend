import { Container, Image, Content } from './Banner.style'
import banner from '../../../assets/images/banner.png'

const MainBanner = () => {
  return (
    <>
      <span>모든 교내 대외활동을 한 자리에 모아봤어요.</span>
      <strong>
        오직, 충남대 학생들을 위한
        <br />
        교내 대외활동 아카이빙 플랫폼
      </strong>
    </>
  )
}

function Banner({ type }) {
  return (
    <Container>
      <Content>
        {type === 'main' && <MainBanner />}
      </Content>
      <Image src={banner} />
    </Container>
  )
}

Banner.defaultProps = {
  color: 'blue',
}

export default Banner
