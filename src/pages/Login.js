import BaseLayout from '../components/common/base-layout';
import UserLogin from '../components/user-login'

function Login() {
  return (
    <BaseLayout type='login'>
      <UserLogin />
    </BaseLayout>
  )
}

export default Login