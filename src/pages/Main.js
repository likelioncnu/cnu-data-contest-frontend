import React, { useState } from 'react'

import BaseLayout from '../components/common/base-layout'
import Container from '../components/common/container'
import UserInfo from '../components/user-info'
import WatchList from '../components/watch-list/WatchList'
import SlickList from '../components/slick-list/SlickList'
import SearchData from '../components/search-data'

// 쿠키 확인(로그인 유무)
// 응답 받은 데이터 props 전달
// SlickList 데이터에 따라 map으로 호출

const section = ['intern', 'contest', 'seminar']
const slickListData = {
  intern: [
    {
      title: '제목1',
      content: '내용',
      university: '단과대학1',
      major: '학과1',
      baseUrl: null,
      images: null,
    },
    {
      title: '제목2',
      content: '내용',
      university: '단과대학2',
      major: '학과2',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
    {
      title: '제목3',
      content: '내용',
      university: '단과대학3',
      major: '학과3',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
    {
      title: '제목4',
      content: '내용',
      university: '단과대학4',
      major: '학과4',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
    {
      title: '제목5',
      content: '내용',
      university: '단과대학5',
      major: '학과5',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
  ],
  contest: [
    {
      title: '제목1',
      content: '내용',
      university: '단과대학1',
      major: '학과1',
      baseUrl: null,
      images: null,
    },
    {
      title: '제목2',
      content: '내용',
      university: '단과대학2',
      major: '학과2',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
    {
      title: '제목3',
      content: '내용',
      university: '단과대학3',
      major: '학과3',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
    {
      title: '제목4',
      content: '내용',
      university: '단과대학4',
      major: '학과4',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
    {
      title: '제목5',
      content: '내용',
      university: '단과대학5',
      major: '학과5',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
  ],
  seminar: [
    {
      title: '제목1',
      content: '내용',
      university: '단과대학1',
      major: '학과1',
      baseUrl: null,
      images: null,
    },
    {
      title: '제목2',
      content: '내용',
      university: '단과대학2',
      major: '학과2',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
    {
      title: '제목3',
      content: '내용',
      university: '단과대학3',
      major: '학과3',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
    {
      title: '제목4',
      content: '내용',
      university: '단과대학4',
      major: '학과4',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
    {
      title: '제목5',
      content: '내용',
      university: '단과대학5',
      major: '학과5',
      baseUrl: '기존 경로',
      images: '이미지 경로',
    },
  ],
}

function Main() {
  return (
    <BaseLayout type="main">
      <SearchData />
      <Container>
        <UserInfo />
        <WatchList />
        {section.map(name => (
          <SlickList section={name} data={slickListData[name]} />
        ))}
      </Container>
    </BaseLayout>
  )
}

export default Main
