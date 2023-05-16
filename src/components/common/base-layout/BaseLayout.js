import Header from '../header'
import Banner from '../banner'

function BaseLayout({ type, children }) {
  return (
    <>
      <Header />
      <Banner type="main" />
      {children}
    </>
  )
}

export default BaseLayout
