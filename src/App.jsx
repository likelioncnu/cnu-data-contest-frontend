import { Route, Routes } from 'react-router-dom'

import GlobalThemeProvider from './styles/GlobalThemeProvider'
import Main from './pages/Main'
import Login from './pages/Login'

function App() {
  return (
    <GlobalThemeProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </GlobalThemeProvider>
  )
}

export default App
