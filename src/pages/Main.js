import React, { useState } from 'react'

import BaseLayout from '../components/common/base-layout'
import UserInfo from '../components/user-info'
import WatchList from '../components/watch-list/WatchList'
import SlickList from '../components/slick-list/SlickList'
import DropDown from '../components/common/UI/drop-down'
import Button from '../components/common/UI/button'

// 쿠키 확인(로그인 유무)
// 응답 받은 데이터 props 전달
// SlickList 데이터에 따라 map으로 호출

function Main() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false)

  const handleDropdownVisibility = e => {
    setDropdownVisibility(!dropdownVisibility)
  }

  return (
    <BaseLayout>
      <UserInfo />
      <WatchList />
      <SlickList />
      <Button onClick={handleDropdownVisibility}>드롭다운</Button>
      <DropDown visibility={dropdownVisibility}>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </DropDown>
    </BaseLayout>
  )
}

export default Main
