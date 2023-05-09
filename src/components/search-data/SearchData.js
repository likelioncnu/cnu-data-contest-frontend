import React, { useState } from 'react'
import { university } from '../../data'
import { Container } from './SearchData.style'
import DropDown from '../common/UI/drop-down'
import Button from '../common/UI/button'

function SearchData() {
  const [universityDropdownVisibility, setUniversityDropdownVisibility] =
    useState(false)
  const [majorDropdownVisibility, setMajorDropdownVisibility] = useState(false)
  const [selectedUniversity, setSelectedUniversity] = useState([])
  const [selectedMajor, setSelectedMajor] = useState('')

  const handleUniversityDropdownVisibility = e => {
    setUniversityDropdownVisibility(!universityDropdownVisibility)
  }

  const handleMajorDropdownVisibility = e => {
    setMajorDropdownVisibility(!majorDropdownVisibility)
  }

  const handleUniveritySelectedDropdownList = e => {
    const selected = e.target.innerText

    university.forEach(item => {
      if (item.name === selected) {
        setSelectedUniversity([...item.major])
      }
    })
    // 드롭다운 사라짐
  }

  const handleMajorSelectedDropdownList = e => {
    const selected = e.target.innerText
    setSelectedMajor(selected)
    // 드롭다운 사라짐
  }

  return (
    <Container>
      <Button onClick={handleUniversityDropdownVisibility}>대학</Button>
      <DropDown visibility={universityDropdownVisibility}>
        <ul>
          {university.map(item => (
            <li key={item.name} onClick={handleUniveritySelectedDropdownList}>
              {item.name}
            </li>
          ))}
        </ul>
      </DropDown>
      <Button onClick={handleMajorDropdownVisibility}>학과</Button>
      <DropDown visibility={majorDropdownVisibility}>
        <ul>
          {selectedUniversity.map(item => (
            <li key={item} onClick={handleMajorSelectedDropdownList}>
              {item}
            </li>
          ))}
        </ul>
      </DropDown>
    </Container>
  )
}

export default SearchData