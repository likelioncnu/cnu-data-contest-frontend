import {
  Container,
  Section,
  StyledSlider,
  Div,
  DivPre,
} from './SlickList.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SlickListItem from './SlickListItem'
import { ReactComponent as Prev } from '../../assets/images/left-arrow.svg'
import { ReactComponent as Next } from '../../assets/images/right-arrow.svg'

function SlickList({ section, data }) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    pauseOnHover: true,
    nextArrow: (
      <Div>
        <Next />
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <Prev />
      </DivPre>
    ),
  }

  return (
    <Container>
      <Section>
        {section === 'intern' && <h1>취업/인턴</h1>}
        {section === 'contest' && <h1>콘테스트</h1>}
        {section === 'seminar' && <h1>역량개발</h1>}
        <a href="#">더 알아보기&gt;</a>
      </Section>
      <StyledSlider {...settings}>
        {data.map((item) => <SlickListItem data={item}></SlickListItem>)}
      </StyledSlider>
    </Container>
  )
}

export default SlickList
