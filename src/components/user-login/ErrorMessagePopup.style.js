import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 220px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`

export const Message = styled.strong`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  line-height: 26px;
  
`
