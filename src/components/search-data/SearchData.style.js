import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  top: -66px;
  max-width: 1020px;
  height: 67px;
  background-color: #ffd600;
  border-radius: 0px 28px 0px 0px;
`

export const Star = styled.div`
  position: absolute;
  top: 22px;
  right: 28px;
  cursor: pointer;
`

export const InnerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 941px;
  background-color: #fff;
  border-radius: 0px 28px 0px 0px;
  height: 67px;
  & button {
    position: absolute;
    right: 44px;
  }
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 352px;
`

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DropDownContainer = styled.div`
  display: flex;
  z-index: 1;
  position: absolute;
  top: 34px;
`

export const Select = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & div {
    max-width: 160px;
    margin-right: 10px;
  }

  &:first-child {
    margin-right: 72px;
  }

  &:last-child {
    margin-right: 103px;
  }
`
