import BaseLayout from '../components/common/base-layout'
import FirstUserLogin from '../components/first-user-login'
import Favorite from '../components/favorite/Favorite'

function FirstLogin() {
  return (
    <BaseLayout>
      <FirstUserLogin />
      <Favorite />
    </BaseLayout>
  )
}

export default FirstLogin