import React, { useState } from 'react'
import file from '../../assets/images/file.png'
import { Link } from 'react-router-dom'
import { Div, Table, THead, TBody } from './Posts.styles'

const handleTransferDate = (itemDate) => {
  const data = JSON.parse(itemDate)
  const date = new Date(data.time)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}

function Posts({ posts, major, loading, clickedPostHandler }) {
  let i = 1
  
  const onClick = post => {
    clickedPostHandler(post)
  }

  return (
    <Div>
      {loading && <div>loading..</div>}
      <Table>
        <THead>
          <tr>
            <th width="10%">번호</th>
            <th width="50%">제목</th>
            <th width="10%">첨부파일</th>
            <th width="15%">날짜</th>
            <th width="15%">학과명</th>
          </tr>
        </THead>
        <TBody>
          {posts.map(post => (
            <tr key={i}>
              <td>{i++}</td>
              <td>
                <Link to="/post" onClick={() => onClick(post)}>
                  <span>{post.title}</span>
                </Link>
              </td>
              <td>{post.image !== '' && <img src={file} alt="file" />}</td>
              <td>{handleTransferDate(post.update_dt)}</td>
              <td>{major}</td>
            </tr>
          ))}
        </TBody>
      </Table>
    </Div>
  )
}

export default Posts
