import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: absolute;
  ${({ type }) => {
    if (type === 'main') {
      return css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
        z-index: 9999;
      `
    } else {
      return css`
        top: 235px;
        left: 875px;
      `
    }
  }}
  width: 684px;
  height: 657px;
  background-color: #fff;
  border-radius: 8px;
  padding: 70px 40px;

  div:last-child {
    margin-top: 16px;
    text-align: end;
  }
`

export const Heading = styled.h1`
  font-size: 20px;
  margin-bottom: 33px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
`

export const SelectContainer = styled.div`
  background-color: #fff;
  width: 159px;
  height: 31px;
  display: inline-flex;
  padding: 5px 13px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid #d9d9d9;
  margin-right: 24px;
`

export const Select = styled.button`
  background-color: #fff;
  cursor: pointer;
`

export const Input = styled.input`
  width: 324px;
  height: 31px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  padding: 5px 16px;
  margin-right: 19px;
  outline: none;
`

export const Hr = styled.hr`
  border: 1px solid #d9d9d9;
`

export const MajorContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 24px 24px 4px 24px;
  max-height: 340px;
  overflow-y: scroll;
`

export const ListContainer = styled.li`
  display: flex;
  width: 50%;
  align-items: center;
  margin-bottom: 20px;
`

export const Label = styled.label`
  box-sizing: border-box;
  display: inline-block;
  margin-right: 20px;
  width: 15px;
  height: 15px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
`

export const Radio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;

  &:checked + label {
    border: 4px solid #2560ab;
  }
`

export const Major = styled.span`
  font-size: 14px;
  cursor: pointer;
`
