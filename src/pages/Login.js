import BaseLayout from '../components/common/base-layout'
import UserLogin from '../components/user-login'

function Login({ userInfoHandler }) {
  return (
    <BaseLayout type="login">
      <UserLogin userInfoHandler={userInfoHandler} />
    </BaseLayout>
  )
}

export default Login
