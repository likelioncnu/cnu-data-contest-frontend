import BaseLayout from '../components/common/base-layout'
import UserInfo from '../components/user-info'
import WatchList from '../components/watch-list/WatchList'

// 쿠키 확인(로그인 유무)
// 응답 받은 데이터 props 전달

function Main() {
  return (
    <BaseLayout>
      <UserInfo />
      <WatchList />
    </BaseLayout>
  )
}

export default Main
