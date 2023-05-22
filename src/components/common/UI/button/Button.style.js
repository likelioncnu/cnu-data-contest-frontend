import styled, { css } from 'styled-components'

const styleType = css`
  ${({ theme, type }) => {
    if (type === 'approve') {
      return css`
        background-color: ${theme.palette.blue};
        color: #fff;
        &:hover {
          transition: all ease-in-out 0.2s;
          background-color: ${theme.palette.hoverBlue};
        }
      `
    } else {
      return css`
        &:hover {
          transition: all ease-in-out 0.2s;
          background-color: ${theme.palette.hoverLightGray};
        }
      `
    }
  }}
`

const styleSize = css`
  ${({ theme, size }) => {
    if (size === 'big') {
      return css`
        width: ${theme.size.big};
      `
    } else {
      return css`
        width: ${theme.size.small};
      `
    }
  }}
`

export const StyledButton = styled.button`
  ${styleType}
  ${styleSize}
  transition: all ease-in-out 0.2s;
  color: #fff;
  height: 33px;
  border-radius: 18.5px;
  cursor: pointer;
`
