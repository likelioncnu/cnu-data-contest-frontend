import GlobalThemeProvider from './styles/GlobalThemeProvider'
import BaseLayout from './components/common/base-layout'

function App() {
  return (
    <GlobalThemeProvider>
      <BaseLayout>Hello World!</BaseLayout>
    </GlobalThemeProvider>
  )
}

export default App
