import Header from '../header'
import Banner from '../banner'

function BaseLayout({ type, section, children }) {
  return (
    <>
      <Header />
      <Banner type={type} section={section} />
      {children}
    </>
  )
}

export default BaseLayout
