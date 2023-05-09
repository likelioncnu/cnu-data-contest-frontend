import { Route, Routes } from 'react-router-dom'

import GlobalThemeProvider from './styles/GlobalThemeProvider'
import Main from './pages/Main'

function App() {
  return (
    <GlobalThemeProvider>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </GlobalThemeProvider>
  )
}

export default App
