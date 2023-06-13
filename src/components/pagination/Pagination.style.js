import styled from 'styled-components'

export const PageUl = styled.ul`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
`

export const PageLi = styled.li`
  display: inline-block;
  font-size: 16px;
  color: #7c7c7c;
  padding: 5px;
  border: 1px solid #d9d9d9;
  width: 32px;
  height: 32px;
  margin-right: 4px;
  margin-bottom: 102px;

  &:hover {
    cursor: pointer;
    color: black;
  }

  &:focus::after {
    color: black;
    font-weight: 700;
  }
`

export const PageSpan = styled.span`
  position: relative;
  top: 4px;
  line-height: 16px;
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`
