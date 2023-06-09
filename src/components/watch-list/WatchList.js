import React, { useState } from 'react'
import { Container } from './WatchList.style'
import WatchListItem from './WatchListItem'

function WatchList({ favoriteData }) {
  return (
    <Container>
      <h2>관심 대외활동</h2>
      <ul>
        {favoriteData.map(item => (
          <WatchListItem
            data={item}          
          />
        ))}
      </ul>
    </Container>
  )
}

export default WatchList
