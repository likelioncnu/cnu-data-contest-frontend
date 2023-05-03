import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  ${({ theme, type }) => {
    if(type === 'approve') {
      return css`
        background-color: ${theme.palette.blue};
        color: #fff;
      `
    }
  }}
  height: 33px;
  padding: 8px 25px 8px 25px;
  border-radius: 18.5px;
  cursor: pointer;
`
