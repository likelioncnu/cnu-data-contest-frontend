import BaseLayout from '../components/common/base-layout'
import UserLogin from '../components/user-login'
import FirstUserLogin from '../components/first-user-login'
import Favorite from '../components/favorite/Favorite'

function Login() {
  return (
    <BaseLayout type="login">
      <UserLogin />
      <Favorite />
    </BaseLayout>
  )
}

export default Login
