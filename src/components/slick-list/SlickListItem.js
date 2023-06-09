import React, { useState, useEffect } from 'react'
import {
  Container,
  ImageContainer,
  NoneImageContainer,
  FavoriteButton,
  Title,
} from './SlickListItem.style'
import notFavoriteImage from '../../assets/images/not-favorite.png'
import favoriteImage from '../../assets/images/favorite.png'
import { useCookies } from 'react-cookie'
import getAsync from '../../api'
import API from '../../config'

// 별을 누르면 별을 채우고 사용자의 관심활동에 추가시키도록 요청한다.
const NoneImage = ({ info, university, major }) => {
  const htmlString = info.content
  const tempElement = document.createElement('div')
  tempElement.innerHTML = htmlString
  const text = tempElement.textContent || tempElement.innerText || ''

  return (
    <NoneImageContainer>
      <span>
        {university}/{major}
      </span>
      <h2>{info.title}</h2>
      <span>{text}</span>
    </NoneImageContainer>
  )
}

function SlickListItem({ info, section, university, major }) {
  const [favorite, setFavorite] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['userId'])

  const onFavoriteHandler = () => {
    setFavorite(!favorite)
    // section => intern, contest, seminar
  }
  const regex = /http:\/\//
  return (
    <>
      {info !== null && (
        <Container>
          <ImageContainer baseUrl={info.baseUrl} url={info.image}>
            {(info.image === '' || info.image.startsWith('http')) && (
              <NoneImage info={info} university={university} major={major}/>
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
            <span>{`${university} / ${major}`}</span>
            <Title>
              <h2>{info.title}</h2>
            </Title>
          </div>
        </Container>
      )}
    </>
  )
}

export default SlickListItem
