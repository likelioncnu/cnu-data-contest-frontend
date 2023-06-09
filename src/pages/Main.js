import React, { useState, useEffect } from 'react'
import { section, slickListData } from '../data'
import { useCookies } from 'react-cookie'
import BaseLayout from '../components/common/base-layout'
import Container from '../components/common/container'
import UserInfo from '../components/user-info'
import WatchList from '../components/watch-list/WatchList'
import SlickList from '../components/slick-list/SlickList'
import SearchData from '../components/search-data'
import { computer } from '../data/computer'
import { koreanLanguage } from '../data/koreanLanguage'
import getAsync from '../api'
import API from '../config'

function Main({ fetchMore, userInfo }) {
  const [cookies, setCookies, removeCookie] = useCookies(['userId'])
  const [computerData, setComputerData] = useState(computer)
  const [koreanLanguageData, setKoreanLanguageData] = useState(koreanLanguage)
  const [selectedMajor, setSelectedMajor] = useState(computerData)
  const [majorInfo, setMajorInfo] = useState({
    university: '공과대학',
    major: '컴퓨터융합학부',
  })

  const handleSelectedMajor = (university, major) => {
    setMajorInfo({ ...majorInfo, university: university, major: major })
  }

  const handleShowFavoriteMajorData = (university, major) => {
    setMajorInfo({ ...majorInfo, university: university, major, major })
    setSelectedMajor(computer)
  }

  return (
    <BaseLayout type="main">
      <SearchData
        handleSelectedMajor={handleSelectedMajor}
        handleShowFavoriteMajorData={handleShowFavoriteMajorData}
      />
      <Container>
        <UserInfo userInfo={userInfo} />
        <WatchList />
        {section.map((name, idx) => (
          <SlickList
            key={idx}
            section={name}
            majorInfo={majorInfo}
            selectedMajor={selectedMajor}
          />
        ))}
      </Container>
    </BaseLayout>
  )
}

export default Main
