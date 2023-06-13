import styled from 'styled-components'

export const Div = styled.div`
  margin-top: 87px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Table = styled.table`
  width: 1000px;
  margin-bottom: 26px;
  table-layout: fixed;
`

export const THead = styled.thead`
  height: 76px;
  text-align: center;
  line-height: 76px;
  padding: 33px;
  border-top: 4px solid #d9d9d9;
  border-bottom: 2px solid #d9d9d9;

  & > tr > th {
    font-weight: 600;
  }
`

export const TBody = styled.tbody`
  & > tr > td {
    height: 68px;
    text-align: center;
    line-height: 68px;
    border-bottom: 2px solid #d9d9d9;
    font-weight: 600;
  }

  & > tr > td:nth-child(2) {
    overflow: hidden;
    white-space: nowrap;
    word-break:break-all;
    text-overflow: ellipsis;
    text-align: start;
  }

  & > tr > td:nth-child(2) > a {
    color: #000;
    text-decoration: none;
  }

  & > tr > td > img {
    position: relative;
    top: 15%;
  }
`
