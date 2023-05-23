import React, { useState } from 'react'
import {
  Container,
  Heading,
  Strong,
  Description,
  Hr,
} from './FirstUserLogin.style'

function FirstUserLogin() {
  return (
    <Container>
      <Heading>
        반갑습니다.
        <br />
        홍길동님
      </Heading>
      <Strong>아직 관심 학과를 선택하지 않으셨나요?</Strong>
      <Description>
        [SPEC++]은 메인 페이지를 관심 학과로 구성할 수 있는 기능을 제공함으로써,
        여러분이 관심 학과로 설정한 여러 학과의 다양한 대외활동 정보를 메인
        페이지에서 한 번에 확인할 수 있게 도와줍니다.
        <br />
        <br />
        관심 학과 선택을 통해 원하는 학과의 대외활동을 더욱 빠르게 찾아보세요!
      </Description>
      <Hr />
    </Container>
  )
}

export default FirstUserLogin
