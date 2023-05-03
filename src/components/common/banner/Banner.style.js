import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({theme, color}) => {
    const selected = theme.palette[color]
    return css`
      background-color: ${selected};
    `
  }}
  height: 392px;
`
