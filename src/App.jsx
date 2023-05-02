import GlobalThemeProvider from './assets/styles/GlobalThemeProvider'
import BaseLayout from './components/common/base-layout'

const App = () => {
  return (
    <GlobalThemeProvider>
      <BaseLayout>Hello World!</BaseLayout>
    </GlobalThemeProvider>
  )
}

export default App
