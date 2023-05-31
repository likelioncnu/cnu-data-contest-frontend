import { Container, Image, Content, BoardContent } from './Banner.style'
import banner from '../../../assets/images/banner.png'
import infographic from '../../../assets/images/infographic.svg'

const BannerContent = ({ type, section }) => {
  return type == 'board' ? (
    <>
      {section === 'intern' && <BoardContent>취업/인턴</BoardContent>}
      {section === 'contest' && <BoardContent>콘테스트</BoardContent>}
      {section === 'seminar' && <BoardContent>역량개발</BoardContent>}
    </>
  ) : (
    <>
      {type === 'login' && <img src={infographic} alt="infographic" />}
      <span>모든 교내 대외활동을 한 자리에 모아봤어요.</span>
      <strong>
        오직, 충남대 학생들을 위한
        <br />
        교내 대외활동 아카이빙 플랫폼
      </strong>
    </>
  )
}

function Banner({ type, section }) {
  return (
    <Container type={type}>
      <Content type={type}>
        <BannerContent type={type} section={section} />
      </Content>
      <Image src={banner} />
    </Container>
  )
}

Banner.defaultProps = {
  color: 'blue',
}

export default Banner
