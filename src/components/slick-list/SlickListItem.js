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

function SlickListItem({
  info,
  section,
  university,
  major,
  handleShowWatchList,
}) {
  const [favorite, setFavorite] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['userId'])
  const regex = /http:\/\//

  const handleFavorite = () => {
    setFavorite(false)
  }

  const onFavoriteHandler = () => {
    setFavorite(!favorite)
    switch (section) {
      case 'intern':
        handleShowWatchList('취업/인턴', info.title, favorite)
        break
      case 'contest':
        handleShowWatchList('콘테스트', info.title, favorite)
        break
      case 'seminar':
        handleShowWatchList('역량개발', info.title, favorite)
        break
    }
  }

  return (
    <>
      {info !== null && (
        <Container>
          <ImageContainer baseUrl={info.baseUrl} url={info.image}>
            {(info.image === '' || info.image.startsWith('http')) && (
              <NoneImage info={info} university={university} major={major} />
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
