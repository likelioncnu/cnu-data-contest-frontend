import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 129px;
  height: 1000px;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  border-top: 4px solid #d9d9d9;
  border-bottom: 4px solid #d9d9d9;

  h1 {
    font-size: 20px;
  }
`

export const Sub = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  border-bottom: 2px solid #D9D9D9;
  font-weight: 600;
  padding: 20px;

  & span:first-child {
    margin-right: 61px;
  }
  
`

export const SubContainer = styled.div`
  display: flex;
`

export const Content = styled.div`
  height: 500px;
  border-bottom: 4px solid #D9D9D9;
`