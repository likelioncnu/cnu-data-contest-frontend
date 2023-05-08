import Header from '../header'
import Banner from '../banner'
import Container from '../container'
function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <Banner />
      <Container>{children}</Container>
    </>
  )
}

export default BaseLayout
