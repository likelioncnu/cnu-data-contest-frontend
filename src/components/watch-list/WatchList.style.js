import styled from 'styled-components'

export const Container = styled.section`
  position: absolute;
  top: -120px;
  right: 0px;
  padding: 24px;
  width: 280px;
  height: 430px;
  background: #f0f5fb;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  h2 {
    font-weight: 600;
    margin-bottom: 8px;
  }
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-bottom: 11px;

  span {
    cursor: pointer;
  }

  img {
    width: 12px;
    height: 17px;
    cursor: pointer;
  }
`
