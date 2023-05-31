import Header from '../header'
import Banner from '../banner'

function BaseLayout({ type, section, children }) {
  return (
    <>
      {type !== 'login' && <Header />}
      <Banner type={type} section={section} />
      {children}
    </>
  )
}

export default BaseLayout
