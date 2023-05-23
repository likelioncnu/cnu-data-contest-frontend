import React, { useState } from 'react'
import Button from '../common/UI/button'
import { Container, Heading } from './Favorite.style'

function Favorite() {
  return (
    <Container>
      <Heading>관심학과 선택하기</Heading>
      <div>
        <input type="text" />
        <input type="text" placeholder="검색어를 입력하세요" />
        <Button type="approve">검색</Button>
      </div>
    </Container>
  )
}

export default Favorite
