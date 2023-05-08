import Header from '../header'
import Banner from '../banner'

function BaseLayout({ children }) {
  return (
    <div>
      <Header />
      <Banner />
      {children}
    </div>
  )
}

export default BaseLayout
