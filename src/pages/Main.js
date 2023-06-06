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

  /**
   * 사용자의 관심학과의 대한 각 section별 데이터를 요청/응답 받는다.
   */
  useEffect(() => {
    const url = API.MAJOR
    const config = {
      method: 'GET',
      data: {
        userId: cookies['userId'],
      },
    }
    const fetchMajor = async () => {
      const res = await getAsync(url, config)
      setData([...data, res])
    }
    fetchMajor()
    console.log(data)
  }, [])

  return (
    <BaseLayout type="main">
      <SearchData />
      <Container>
        <UserInfo userInfo={userInfo} />
        <WatchList />
        {section.map((name, idx) => (
          <SlickList
            key={idx}
            section={name}
            data={slickListData[name]}
            fetchMore={fetchMore}
          />
        ))}
      </Container>
    </BaseLayout>
  )
}

export default Main
