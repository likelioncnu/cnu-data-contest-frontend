import React, { useState } from 'react'
import {
  Container,
  Heading,
  SearchContainer,
  SelectContainer,
  Select,
  Input,
  Hr,
  MajorContainer,
  ListContainer,
  Label,
  Radio,
  Major,
} from './Favorite.style'
import { useCookies } from 'react-cookie'
import dropdown from '../../assets/images/dropdown.svg'
import Button from '../common/UI/button'
import DropDown from '../common/UI/drop-down'
import { university } from '../../data'
import { getAsync } from '../../api'
import API from '../../config'

const List = ({ item, setSelectedMajor }) => {
  const onClick = () => {
    setSelectedMajor(item)
  }

  return (
    <ListContainer>
      <Radio type="radio" name="major" id={item} />
      <Label htmlFor={item} onClick={onClick}></Label>
      <Major>{item}</Major>
    </ListContainer>
  )
}

function Favorite({ fetchFavoriteMajor }) {
  const [cookies, setCookies, removeCookies] = useCookies(['userId'])
  const [dropdownVisibility, setDropdownVisibility] = useState(false)
  const [selectedUniversity, setSelectedUniversity] = useState('단과대학')
  const [inputMajor, setInputMajor] = useState('')
  const [searchMajor, setSearchMajor] = useState([])
  const [selectedMajor, setSelectedMajor] = useState('')

  const handleDropdownVisibility = () => {
    setDropdownVisibility(!dropdownVisibility)
  }

  const handleSelectedUniversity = e => {
    const selected = e.target.textContent
    setDropdownVisibility(!dropdownVisibility)
    setSelectedUniversity(selected)
  }

  const onChange = e => {
    const value = e.target.value
    setInputMajor(value)
  }

  const onSearch = () => {
    // 대학 + 학과 검색
    if (inputMajor.length > 0 && selectedUniversity !== '단과대학') {
      university.map(item => {
        if (item.name === selectedUniversity) {
          item.major.map(elem => {
            if (elem === inputMajor) {
              setSearchMajor([elem])
            }
          })
        }
      })
      // 학과 검색
    } else if (inputMajor.length > 0) {
      university.map(item => {
        item.major.map(elem => {
          if (elem === inputMajor) {
            setSearchMajor([elem])
          }
        })
      })
      // 대학 검색
    } else if (selectedUniversity !== '단과대학') {
      university.map(item => {
        if (item.name === selectedUniversity) {
          setSearchMajor(item.major)
        }
      })
    }
  }

  const onSubmit = () => {
    fetchFavoriteMajor(selectedMajor)
  }

  return (
    <Container>
      <Heading>관심학과 선택하기</Heading>
      <SearchContainer>
        <SelectContainer onClick={handleDropdownVisibility}>
          <Select>{selectedUniversity}</Select>
          <img src={dropdown} alt="drop down" width="12px" height="12px" />
        </SelectContainer>
        <DropDown visibility={dropdownVisibility} type="favorite">
          <ul>
            {university.map(item => (
              <li key={item.name} onClick={handleSelectedUniversity}>
                {item.name}
              </li>
            ))}
          </ul>
        </DropDown>
        <Input
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={onChange}
        />
        <Button type="approve" onClick={onSearch}>
          검색
        </Button>
      </SearchContainer>
      <Hr />
      <MajorContainer>
        {searchMajor.map(item => (
          <List item={item} setSelectedMajor={setSelectedMajor} />
        ))}
      </MajorContainer>
      <Hr />
      <Button type="approve" size="mid" onClick={onSubmit}>
        선택완료
      </Button>
    </Container>
  )
}

export default Favorite
