import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import GlobalThemeProvider from './styles/GlobalThemeProvider'
import { useCookies } from 'react-cookie'
import getAsync from './api'
import Main from './pages/Main'
import Login from './pages/Login'
import FirstLogin from './pages/FirstLogin'
import BoardList from './pages/BoardList'
import Post from './pages/Post'
import API from './config'

function App() {
  const [cookies, setCookies, removeCookie] = useCookies(['userId'])
  const navigate = useNavigate()

  const [section, setSection] = useState('')
  const [major, setMajor] = useState('')
  const [userInfo, setUserInfo] = useState({
    name: '',
    major: '',
  })
  const [favoriteMajor, setFavoriteMajor] = useState({
    userId: '',
    favoriteMajor: '',
  })
  const [clickedPost, setClickedPost] = useState({})

  useEffect(() => {
    cookies.userId === undefined && navigate('/login')
  }, [cookies.userId])

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  const indexOfLast = currentPage * postsPerPage
  const indexOfFirst = indexOfLast - postsPerPage

  const currentPosts = posts => {
    let currentPosts = 0
    currentPosts = posts.slice(indexOfFirst, indexOfLast)
    return currentPosts
  }

  /**
   * 더 알아보기 클릭 시 데이터를 요청하고 게시판으로 이동한다.
   */
  const fetchMore = async (section, major) => {
    setSection(section)
    const config = {
      method: 'GET',
    }
    // ** url에 쿼리로 major을 입력하여 데이터를 가져온다. **
    setPosts(
      await getAsync('https://jsonplaceholder.typicode.com/posts', config)
    )
    setMajor(major)
    setLoading(false)
    navigate('/board-list')
  }

  /**
   * 로그인에 성공했을 시 사용자의 이름, 학과를 받아온다.
   */
  const userInfoHandler = (name, major) => {
    setUserInfo({ ...userInfo, name, major })
  }

  /**
   * 처음 로그인한 사용자가 관심학과를 선택했을 경우 관심학과를 설정하도록 한다.
   */
  const fetchFavoriteMajor = async selectedMajor => {
    setFavoriteMajor({
      userId: cookies['userId'],
      favoriteMajor: selectedMajor,
    })
    const config = {
      method: 'POST',
      data: favoriteMajor,
    }
    const res = await getAsync(API.MAJOR, config)
    // 관심학과를 요청하면 해당 관심학과가 데이터베이스 추가 되고
    // 응답값은 ..?
    window.location.href = '/'
  }

  /**
   * 사용자가 게시판에서 게시글을 클릭 했을 때 내용을 clickedPost state에 할당한다.
   */
  const clickedPostHandler = post => {
    // state 설정
    setClickedPost(post)
  }

  return (
    <GlobalThemeProvider>
      <Routes>
        <Route
          path="/"
          element={<Main fetchMore={fetchMore} userInfo={userInfo} />}
        />
        <Route
          path="/login"
          element={<Login userInfoHandler={userInfoHandler} />}
        />
        <Route
          path="/first-login"
          element={<FirstLogin fetchFavoriteMajor={fetchFavoriteMajor} />}
        ></Route>
        {/* 더 알아보기 눌렀을 때 section(state)이 다르게 전달되어야 한다. */}
        <Route
          path="board-list"
          element={
            <BoardList
              section={section}
              major={major}
              posts={currentPosts(posts)}
              loading={loading}
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={setCurrentPage}
              clickedPostHandler={clickedPostHandler}
            />
          }
        ></Route>
        <Route
          path="post"
          element={<Post section={section} clickedPost={clickedPost} />}
        ></Route>
      </Routes>
    </GlobalThemeProvider>
  )
}

export default App
