import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  background-color: #2560ab;
  height: 392px;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const Content = styled.div`
  position: absolute;

  top: 53px;
  left: 352px;

  * {
    color: #fff;
    font-weight: 700;
  }

  span {
    display: block;
    font-size: 20px;
    margin-bottom: 17px;
  }

  strong {
    font-size: 33px;
    line-height: 39px;
  }
`
