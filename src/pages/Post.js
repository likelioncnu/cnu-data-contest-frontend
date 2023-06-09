import React from 'react'
import BaseLayout from '../components/common/base-layout'
import Container from '../components/common/container'
import PostContent from '../components/post-content/PostContent'

function Post({ section, clickedPost }) {
  return (
    <BaseLayout type="board" section={section}>
      <Container>
        {section}
        <PostContent clickedPost={clickedPost} />
      </Container>
    </BaseLayout>
  )
}

export default Post
