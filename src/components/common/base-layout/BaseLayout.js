import Header from '../header'
import Banner from '../banner'
import UserInfo from '../../user-info'

function BaseLayout({ children }) {
  return (
    <div>
      <Header />
      <Banner />
      <UserInfo />
      {children}
    </div>
  )
}

export default BaseLayout
