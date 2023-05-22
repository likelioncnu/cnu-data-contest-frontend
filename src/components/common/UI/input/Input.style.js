import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ type }) =>
    type === 'checkbox'
      ? css`
          display: flex;
          flex-direction: row-reverse;
          justify-content: start;
          align-items: center;
          margin-bottom: 10px;
        `
      : css`
          display: flex;
          flex-direction: column;
        `}
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
`

const inputType = {
  text: css`
    border: none;
    border-bottom: 2px solid #cacaca;
    padding: 7px;
    margin-bottom: 43px;
  `,
  password: css`
    border: none;
    border-bottom: 2px solid #cacaca;
    padding: 7px;
    margin-bottom: 43px;
  `,
  checkbox: css`
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid #d9d9d9;
    margin-right: 8px;
    cursor: pointer;
    outline: none;

    &:checked {
      border: 4px solid #2560ab;
    }
  `,
}

export const InputElement = styled.input`
  outline: none;
  ${({ type }) => inputType[type]}
`
