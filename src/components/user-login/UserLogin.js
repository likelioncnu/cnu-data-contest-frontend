import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../common/UI/button'
import Input from '../common/UI/input'
import {
  Container,
  Title,
  CheckBoxContainer,
  InputContainer,
} from './UserLogin.style'
import ErrorMessagePopup from './ErrorMessagePopUp'
import { useCookies } from 'react-cookie'
import getAsync from '../../api'
import API from '../../config'

function UserLogin() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    userId: '',
    userPw: '',
  })
  const [failedLogin, setFailedLogin] = useState(false)
  const [cookies, setCookies, removeCookies] = useCookies(['userId'])
  const { userId, userPw } = input

  const onChange = e => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name]: value,
    })
  }

  const onLogin = () => {
    const config = {
      method: 'POST',
      url: API.LOGIN,
      data: input,
    }
    // getAsync(config).then(res => {
    //   const { member } = res.data
    //   const memberValue = {
    //     none: () => {
    //       setCookies('userId', input.userId)
    //       navigate('/first-login')
    //     },
    //     false: () => {
    // 패스워드가 틀렸다는 팝업을 뜨게 한다. => serFailedLogin
    // setFailedLogin(!failedLogin)
    //     },
    //     true: () => {
    //       setCookies('userId', input.userId)
    //       navigate('/')
    //     }
    //   }
    //   memberValue[member]()
    // })
    if (userId === '' || userPw === '') {
      console.log('hello')
      setFailedLogin(true)
    } else {
      setCookies('userId', input.userId)
      navigate('/')
    }
  }

  return (
    <Container>
      <Title>Login</Title>
      <InputContainer>
        <Input
          type="text"
          name="userId"
          onChange={onChange}
          value={userId}
          id="userId"
          placeholder="충남대학교 포탈 ID"
          content="포탈 ID"
        />
        <Input
          type="password"
          name="userPw"
          onChange={onChange}
          value={userPw}
          id="userPw"
          placeholder="충남대학교 포탈 PW"
          content="패스워드"
        />
      </InputContainer>
      <CheckBoxContainer>
        <div>
          <Input type="checkbox" id="save" content="ID저장" />
        </div>
        <div>
          <Input type="checkbox" id="maintenance" content="로그인 유지" />
        </div>
      </CheckBoxContainer>
      <Button type="approve" size="big" onClick={onLogin}>
        로그인
      </Button>
      {failedLogin && <ErrorMessagePopup setFailedLogin={setFailedLogin} />}
    </Container>
  )
}

export default UserLogin
