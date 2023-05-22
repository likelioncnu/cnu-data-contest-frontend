import Header from '../header'
import Banner from '../banner'

function BaseLayout({ type, children }) {
  return (
    <>
      <Header />
      <Banner type={type} />
      {children}
    </>
  )
}

export default BaseLayout
