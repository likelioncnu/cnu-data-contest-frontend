import React from 'react'
import file from '../../assets/images/file.png'
import { Link } from 'react-router-dom'
import { Div, Table, THead, TBody } from './Posts.styles'

function Posts({ posts, major, loading, clickedPostHandler }) {
  const onClick = post => {
    clickedPostHandler(post)
  }

  return (
    <Div>
      {loading && <div>loading..</div>}
      <Table>
        <THead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>첨부파일</th>
            <th>날짜</th>
            <th>학과명</th>
          </tr>
        </THead>
        <TBody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Link to="/post" onClick={() => onClick(post)}>
                  <span>{post.title}</span>
                </Link>
              </td>
              {/* post.image가 있으면 file 이미지 출력 */}
              <td>
                <img src={file} alt="file" />
              </td>
              {/* post.update_dt면  */}
              <td>1998-04-30</td>
              {/* major */}
              <td>컴퓨터융합학부</td>
            </tr>
          ))}
        </TBody>
      </Table>
    </Div>
  )
}

export default Posts
