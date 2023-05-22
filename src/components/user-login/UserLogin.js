import React, { useState } from 'react'
import Button from '../common/UI/button'
import Input from '../common/UI/input'
import {
  Container,
  Title,
  CheckBoxContainer,
  InputContainer,
} from './UserLogin.style'

function UserLogin() {
  const [input, setInput] = useState({
    userId: '',
    userPw: '',
  })

  const onLogin = e => {
    const value = e.target.value
    setInput({ ...input, userId: value })
  }

  return (
    <Container>
      <Title>Login</Title>
      <InputContainer>
        <Input
          type="text"
          name="userId"
          onChange={onLogin}
          value={input.userId}
          id="userId"
          placeholder="충남대학교 포탈 ID"
          content="포탈 ID"
        />
        <Input
          type="password"
          name="userPw"
          value={input.userPw}
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
      <Button type="approve" size="big">로그인</Button>
    </Container>
  )
}

export default UserLogin
