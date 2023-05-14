import React, { useState } from 'react'

import BaseLayout from '../components/common/base-layout'
import UserInfo from '../components/user-info'
import WatchList from '../components/watch-list/WatchList'
import SlickList from '../components/slick-list/SlickList'
import SearchData from '../components/search-data'

// 쿠키 확인(로그인 유무)
// 응답 받은 데이터 props 전달
// SlickList 데이터에 따라 map으로 호출

function Main() {
  return (
    <BaseLayout type="main">
      <UserInfo />
      <WatchList />
      <SlickList />
      <SearchData />
    </BaseLayout>
  )
}

export default Main
