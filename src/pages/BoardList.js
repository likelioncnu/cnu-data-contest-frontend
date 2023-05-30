import React, { useState, useEffect } from 'react'
import BaseLayout from '../components/common/base-layout'
import Container from '../components/common/container'
import getAsync from '../api'
import API from '../config'
import Posts from '../components/posts/Posts'
import Pagination from '../assets/images/pagination/Pagination'

function BoardList({
  section,
  posts,
  loading,
  postsPerPage,
  totalPosts,
  paginate,
}) {
  return (
    <BaseLayout type="board" section={section}>
      <Container>
        <Posts posts={posts} loading={loading} />
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
