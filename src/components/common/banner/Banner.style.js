import styled, { css } from 'styled-components'

const containerType = {
  main: css`
    height: 392px;
  `,
  login: css`
    height: 883px;
  `
}

export const Container = styled.div`
  ${({type}) => containerType[type]}

  position: relative;
  background-color: #2560ab;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

const contentType = {
  main: css`
    top: 53px;
    left: 352px;
  `,
  login: css`
    strong {
      font-size: 40px;
    }
    top: 194px;
    left: 940px;
  `,
}

export const Content = styled.div`
  position: absolute;
  color: #fff;
  font-weight: 700;

  span {
    display: block;
    font-size: 20px;
    margin-bottom: 17px;
  }

  strong {
    font-size: 33px;
    line-height: 39px;
  }

  ${({ type }) => contentType[type]}
`
