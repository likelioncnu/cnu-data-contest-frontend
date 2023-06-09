import React from 'react'
import {
  Container,
  Title,
  Sub,
  SubContainer,
  Content,
} from './PostContent.style'

function PostContent({ clickedPost }) {
  return (
    <Container>
      <Title>
        <h1>title</h1>
      </Title>
      <Sub>
        <SubContainer>
          <span>작성자 강병현</span>
          <span>등록일 1998-04-30</span>
        </SubContainer>
      </Sub>
      <Content>내용</Content>
    </Container>
  )
}

export default PostContent
