import BaseLayout from '../components/common/base-layout'
import FirstUserLogin from '../components/first-user-login'
import Favorite from '../components/favorite/Favorite'

function FirstLogin({ fetchFavoriteMajor }) {
  return (
    <BaseLayout type="login">
      <FirstUserLogin />
      <Favorite fetchFavoriteMajor={fetchFavoriteMajor} />
    </BaseLayout>
  )
}

export default FirstLogin
