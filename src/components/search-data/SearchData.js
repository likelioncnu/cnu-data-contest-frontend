import React, { useState } from 'react'
import star from '../../assets/images/star.svg'
import { university } from '../../data'
import {
  Container,
  InnerContainer,
  SelectContainer,
  Select,
  Div,
  Star,
  DropDownContainer,
} from './SearchData.style'
import DropDown from '../common/UI/drop-down'
import Button from '../common/UI/button'
import dropdown from '../../assets/images/dropdown.svg'

function SearchData({ handleSelectedMajor, handleShowFavoriteMajorData }) {
  const [universityDropdownVisibility, setUniversityDropdownVisibility] =
    useState(false)
  const [majorDropdownVisibility, setMajorDropdownVisibility] = useState(false)
  const [selectedUniversity, setSelectedUniversity] = useState([])
  // 추후 수정) university와 major의 default: 관심학과
  const [inputUniversity, setInputUniversity] = useState('단과대학')
  const [inputMajor, setInputMajor] = useState('학과')

  const handleUniversityDropdownVisibility = e => {
    setUniversityDropdownVisibility(!universityDropdownVisibility)
  }

  const handleMajorDropdownVisibility = e => {
    setMajorDropdownVisibility(!majorDropdownVisibility)
  }

  const handleUniveritySelectedDropdownList = e => {
    const selected = e.target.innerText
    setInputUniversity(selected)
    university.forEach(item => {
      if (item.name === selected) {
        setSelectedUniversity([...item.major])
      }
    })
    setUniversityDropdownVisibility(!universityDropdownVisibility)
  }

  const handleMajorSelectedDropdownList = e => {
    const selected = e.target.innerText
    setInputMajor(selected)
    setMajorDropdownVisibility(!majorDropdownVisibility)
  }

  const handleSearch = () => {
    handleSelectedMajor(inputUniversity, inputMajor)
  }

  const handleShowFavorite = () => {
    handleShowFavoriteMajorData('공과대학', '컴퓨터융합학부')
  }

  return (
    <Container>
      <Star onClick={handleShowFavorite}>
        <img src={star} alt="star" />
      </Star>

      <InnerContainer>
        <Div>
          <SelectContainer>
            <Select>
              <div onClick={handleUniversityDropdownVisibility}>
                {inputUniversity}
              </div>
              <img src={dropdown} alt="dropdown" />
            </Select>
            <Select>
              <div onClick={handleMajorDropdownVisibility}>{inputMajor}</div>
              <img src={dropdown} alt="dropdown" />
            </Select>
          </SelectContainer>
          <DropDownContainer>
            <DropDown visibility={universityDropdownVisibility}>
              <ul>
                {university.map(item => (
                  <li
                    key={item.name}
                    onClick={handleUniveritySelectedDropdownList}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </DropDown>
            <DropDown visibility={majorDropdownVisibility}>
              <ul>
                {selectedUniversity.map(item => (
                  <li key={item} onClick={handleMajorSelectedDropdownList}>
                    {item}
                  </li>
                ))}
              </ul>
            </DropDown>
          </DropDownContainer>
        </Div>
        <Button type="approve" size="small" onClick={handleSearch}>
          검색
        </Button>
      </InnerContainer>
    </Container>
  )
}

export default SearchData
