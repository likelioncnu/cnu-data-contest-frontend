import React from 'react'
import Button from '../common/UI/button'
import { Container, Message } from './ErrorMessagePopup.style'

function ErrorMessagePopup({ setFailedLogin }) {
  const onClick = () => {
    setFailedLogin(false)
  }

  return (
    <Container>
      <Message>
        사용자 정보가 일치하지 않습니다.
        <br />
        다시 입력해주세요.
      </Message>
      <Button type="approve" onClick={onClick}>
        확인
      </Button>
    </Container>
  )
}

export default ErrorMessagePopup
