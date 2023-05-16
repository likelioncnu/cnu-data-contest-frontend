import styled from 'styled-components'
import Slider from 'react-slick'

export const Container = styled.div`
  width: 836px;
  height: 352px;
  margin-bottom: 115px;
`

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-right: 20px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #5b5b5b;
  }

  a {
    text-decoration: none;
    letter-spacing: 0.5px;
    color: #5b5b5b;
    font-size: 12px;
  }
`

export const StyledSlider = styled(Slider)`
  height: 260px;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`

export const Div = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -6px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`

export const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: -28px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`
