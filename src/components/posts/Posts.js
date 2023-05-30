import React from 'react'

function Posts({ posts, loading }) {
  return (
    <>
      {loading && <div>loading..</div>}
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>첨부파일</th>
            <th>날짜</th>
            <th>학과명</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Posts
