import React, { useState } from 'react'
import {
  Container,
  Heading,
  SearchContainer,
  SelectContainer,
  Select,
  Input,
  Hr,
  MajorContainer
} from './Favorite.style'
import dropdown from '../../assets/images/dropdown.svg'
import Button from '../common/UI/button'
import DropDown from '../common/UI/drop-down'

function Favorite() {
  const [visibility, setVisibility] = useState(false)

  const handleDropdownVisibility = () => {
    setVisibility(!visibility)
  }


  return (
    <Container>
      <Heading>관심학과 선택하기</Heading>
      <SearchContainer>
        <SelectContainer>
          <Select onClick={handleDropdownVisibility}>단과대학</Select>
          <img src={dropdown} alt="drop down" width="12px" height="12px" />
        </SelectContainer>
        {/* <DropDown visibility={visibility}>
          <ul>
            {university.map(item => (
              <li key={item.name} onClick={handleUniveritySelectedDropdownList}>
                {item.name}
              </li>
            ))}
          </ul>
        </DropDown> */}
        {/* <Input type="text" placeholder="검색어를 입력하세요" /> */}
        <Button type="approve">검색</Button>
      </SearchContainer>
      <Hr />
      <MajorContainer>
        
      </MajorContainer>
      <Hr />
    </Container>
  )
}

export default Favorite
