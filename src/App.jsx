import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, Link } from 'react-router-dom'
import GlobalThemeProvider from './styles/GlobalThemeProvider'
import { useCookies } from 'react-cookie'
import Main from './pages/Main'
import Login from './pages/Login'
import FirstLogin from './pages/FirstLogin'

function App() {
  const [isLogined, setIsLogined] = useState(false)
  const [cookies, setCookies, removeCookie] = useCookies(['userId'])
  const navigate = useNavigate()

  useEffect(() => {
    cookies.userId === undefined ? navigate('/login') : navigate('/')
  }, [cookies.userId])

  return (
    <GlobalThemeProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/first-login" element={<FirstLogin />}></Route>
      </Routes>
    </GlobalThemeProvider>
  )
}

export default App
