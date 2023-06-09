import React, { useState, useEffect } from 'react'
import { section, slickListData } from '../data'
import { useCookies } from 'react-cookie'
import BaseLayout from '../components/common/base-layout'
import Container from '../components/common/container'
import UserInfo from '../components/user-info'
import WatchList from '../components/watch-list/WatchList'
import SlickList from '../components/slick-list/SlickList'
import SearchData from '../components/search-data'
import getAsync from '../api'
import API from '../config'

function Main({ fetchMore, userInfo }) {
  const [data, setData] = useState([])
  const [cookies, setCookies, removeCookie] = useCookies(['userId'])
  const [majorInfo, setMajorInfo] = useState({
    university: '공과대학',
    major: '컴퓨터융합학부',
  })

  const handleSelectedMajor = (university, major) => {
    setMajorInfo({ ...majorInfo, university: university, major: major })
  }

  return (
    <BaseLayout type="main">
      <SearchData handleSelectedMajor={handleSelectedMajor} />
      <Container>
        <UserInfo userInfo={userInfo} />
        <WatchList />
        {section.map((name, idx) => (
          <SlickList key={idx} section={name} majorInfo={majorInfo} />
        ))}
      </Container>
    </BaseLayout>
  )
}

export default Main
