import React from 'react'
import { PageUl, PageLi, PageSpan } from './Pagination.style'

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map(number => (
            <PageLi key={number} className="page-item" onClick={() => paginate(number)}>
              <PageSpan className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  )
}

export default Pagination
