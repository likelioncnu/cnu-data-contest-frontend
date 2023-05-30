import styled, { css } from 'styled-components'

const containerType = {
  main: css`
    height: 392px;
  `,
  login: css`
    height: 883px;
  `,
  board: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 331px;
  `
}

export const Container = styled.div`
  ${({type}) => containerType[type]}

  position: relative;
  background-color: #2560ab;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
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

export const BoardContent = styled.h1`
  font-size: 40px;
`

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
