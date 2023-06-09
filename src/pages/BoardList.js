import React, { useState, useEffect } from 'react'
import BaseLayout from '../components/common/base-layout'
import Container from '../components/common/container'
import Posts from '../components/posts/Posts'
import Pagination from '../components/pagination'

function BoardList({
  section,
  major,
  posts,
  loading,
  postsPerPage,
  totalPosts,
  paginate,
}) {
  return (
    <BaseLayout type="board" section={section}>
      <Container>
        <Posts posts={posts} major={major} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
        />
      </Container>
    </BaseLayout>
  )
}

export default BoardList
