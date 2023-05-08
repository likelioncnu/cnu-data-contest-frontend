import GlobalThemeProvider from './styles/GlobalThemeProvider'
import Main from './pages/Main'

function App() {
  return (
    <GlobalThemeProvider>
      <Main />
    </GlobalThemeProvider>
  )
}

export default App
