import Button from '../common/UI/button'
import {Container} from './UserInfo.style'

// parameter: username, 대학, 학과, 학번, [관심학과]
// 로그아웃 이벤트 함수 구현
// 관심학과 수정 이벤트 구현(component)

export const FavoriteList = ({listItem}) => {
  return (
    <li>인문대학 국어국문학과</li>
  )
}

const onLogout = () => {
  
}

function UserInfo({
  username,
  university,
  department,
  studentNumber,
  favorite,
}) {
  return (
    <Container>
      <div>
        <div>
          <h2>홍길동 님</h2>
          <Button onClick={onLogout}>로그아웃</Button>
        </div>
        <strong>인문대학 국어국문학과</strong>
        <span>201912345</span>
      </div>
      <div>
        <div>
          <h2>관심학과</h2>
          <span>수정하기</span>
        </div>
        <ul>
          {/* FavoriteList */}
        </ul>
      </div>
    </Container>
  )
}

export default UserInfo
