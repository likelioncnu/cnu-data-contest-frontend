import Header from '../header'
import Banner from '../banner'
import Container from '../container'
function BaseLayout({ banner, children }) {
  return (
    <>
      <Header />
      <Banner type="main" />
      <Container>{children}</Container>
    </>
  )
}

export default BaseLayout
