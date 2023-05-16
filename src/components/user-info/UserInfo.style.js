import styled from 'styled-components'

export const Container = styled.section`
  padding: 38px 22px;
  position: absolute;
  top: -405px;
  right: 0px;
  width: 280px;
  height: 271px;
  background: #ffffff;
  border: 1px solid #cacaca;
  border-radius: 8px;

  strong {
    display: block;
    font-size: 14px;
    margin-bottom: 12px;
  }

  hr {
    border: 2px solid #d9d9d9;
    margin-bottom: 16px;
  }
`
export const UserInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h2 {
    font-size: 24px;
  }
`
export const UserNumber = styled.span`
  font-weight: 700;
  display: block;
  margin-bottom: 35px;
`

export const UserInfoFavorite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
  span {
    font-weight: 400;
    font-size: 12px;
    text-decoration-line: underline;
    cursor: pointer;
  }
`

export const FavoriteList = styled.ul`
  
`

export const ListItem = styled.li`
  font-size: 14px;
`
