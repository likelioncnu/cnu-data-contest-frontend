import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import GlobalThemeProvider from './styles/GlobalThemeProvider'
import { useCookies } from 'react-cookie'
import getAsync from './api'
import Main from './pages/Main'
import Login from './pages/Login'
import FirstLogin from './pages/FirstLogin'
import BoardList from './pages/BoardList'

function App() {
  const [cookies, setCookies, removeCookie] = useCookies(['userId'])
  const navigate = useNavigate()

  const [section, setSection] = useState('')
  const [userInfo, setUserInfo] = useState({
    name: '',
    major: '',
  })
  const [favoriteMajor, setFavoriteMajor] = useState('')

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
  const fetchMore = async section => {
    setSection(section)
    const config = {
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
    }
    setPosts(await getAsync(config))
    setLoading(false)
    navigate('/board-list')
  }

  /**
   * 로그인에 성공했을 시 사용자의 이름, 학과를 받아온다.
   */
  const userInfoHandler = (name, major) => {
    setUserInfo({ ...userInfo, name, major })
  }

  const fetchFavoriteMajor = () => {

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
              posts={currentPosts(posts)}
              loading={loading}
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={setCurrentPage}
            />
          }
        ></Route>
      </Routes>
    </GlobalThemeProvider>
  )
}

export default App
