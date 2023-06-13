import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 129px;
  padding-bottom: 300px;
`

export const InnerContainer = styled.div`
  border-bottom: 4px solid #d9d9d9;
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
  border-bottom: 2px solid #d9d9d9;
  font-weight: 600;
  padding: 20px;

  & strong {
    font-weight: 600;
  }

  & strong:first-child {
    margin-right: 61px;
  }
`

export const SubContainer = styled.div`
  display: flex;
`

export const ContentContainer = styled.div`
  width: 800px;
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`

export const Content = styled.div`
  padding: 40px;
`
