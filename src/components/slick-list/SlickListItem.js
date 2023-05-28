import React, { useState } from 'react'
import {
  Container,
  ImageContainer,
  FavoriteButton,
} from './SlickListItem.style'
import notFavoriteImage from '../../assets/images/not-favorite.png'
import favoriteImage from '../../assets/images/favorite.png'
import { useCookies } from 'react-cookie'
import getAsync from '../../api'
import API from '../../config'

// 별을 누르면 별을 채우고 사용자의 관심활동에 추가시키도록 요청한다.
const NoneImage = ({ info }) => {
  return (
    <>
      <h2>{info.title}</h2>
      <span>{info.content}</span>
    </>
  )
}

function SlickListItem({ info, section }) {
  const [favorite, setFavorite] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);

  const onFavoriteHandler = () => {
    setFavorite(!favorite)
    // section => intern, contest, seminar
    const data = {
      id: cookies.userId,
      section: section,
      title: info.title,
    }
    const config = {
      method: 'POST',
      url: API.FAVORITE,
      data,
    }
    getAsync(config).then(res => console.log(res))
  }

  return (
    <Container>
      <ImageContainer>
        {info.images && info.baseURl !== '' ? (
          <img src={`${info.baseUrl}${info.image}`} alt={info.title} />
        ) : (
          <NoneImage info={info} />
        )}
        <FavoriteButton onClick={onFavoriteHandler}>
          {favorite ? (
            <img src={favoriteImage} alt="not favorite" />
          ) : (
            <img src={notFavoriteImage} alt="favorite" />
          )}
        </FavoriteButton>
      </ImageContainer>
      <div>
        <span>{`${info.university}/${info.major}`}</span>
        <h2>{info.title}</h2>
      </div>
    </Container>
  )
}

export default SlickListItem
