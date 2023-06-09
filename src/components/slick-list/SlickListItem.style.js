import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 186px;
  height: 300px;
  cursor: pointer;
  span {
    display: block;
    margin-bottom: 4px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  background: #cde1f8;
  border-radius: 8px;
  margin-bottom: 14px;
  background-image: url(${({ baseUrl, url }) => `${baseUrl}${url}`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const NoneImageContainer = styled.div`
  position: relative;
  top: 57px;
  padding: 10px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    font-size: 12px;
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 27px;
  }

  span:last-child {
    font-size: 14px;
    line-height: 20px;
  }
`
export const FavoriteButton = styled.div`
  position: absolute;
  top: 0;
  right: 19px;
`

export const Title = styled.div`
  & h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 100px;
  }
`
