import React, { useState, useEffect } from 'react'
import Button from '../common/UI/button'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  UserInfoTitle,
  UserNumber,
  UserInfoFavorite,
  FavoriteList,
  ListItem,
} from './UserInfo.style'
import API from '../../config'
import getAsync from '../../api'

function UserInfo({ userInfo }) {
  const navigate = useNavigate()
  const [cookies, setCookies, removeCookie] = useCookies(['userId'])
  const [favoriteMajor, setFavoriteMajor] = useState('')

  /**
   * 사용자의 관심학과 요청
   * method 수정해야함.
   */
  useEffect(() => {
    const getFavoriteMajor = async () => {
      const url = API.MAJOR
      const config = {
        method: 'GET',
      }
      const { favoriteMajor } = await getAsync(`${url}?userId=${cookies['userId']}`, config)
      setFavoriteMajor(favoriteMajor)
    }
    getFavoriteMajor()
  }, [])

  /**
   * 사용자의 관심학과 수정
   */
  const onClick = () => {}

  const { name, major } = userInfo
  const onLogout = () => {
    removeCookie('userId')
    navigate('/login')
  }

  return (
    <Container>
      <div>
        <UserInfoTitle>
          <h2>{name} 님</h2>
          <Button onClick={onLogout}>로그아웃</Button>
        </UserInfoTitle>
        <strong>{major}</strong>
        <UserNumber>{cookies['userId']}</UserNumber>
      </div>
      <hr />
      <div>
        <UserInfoFavorite>
          <h2>관심학과</h2>
          <span onClick={onClick}>수정하기</span>
        </UserInfoFavorite>
        <FavoriteList>
          <ListItem>{favoriteMajor}</ListItem>
        </FavoriteList>
      </div>
    </Container>
  )
}

export default UserInfo
