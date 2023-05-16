import { Container, ImageContainer } from './SlickListItem.style'

// 별을 누르면 별을 채우고 사용자의 관심활동에 추가시키도록 요청한다.

const NoneImage = ({ data }) => {
  return (
    <>
      <h2>{data.title}</h2>
      <span>{data.content}</span>
    </>
  )
}

function SlickListItem({ data }) {
  return (
    <Container>
      <ImageContainer>
        {data.images && data.baseURl !== null ? (
          <img
            src={`${data.baseUrl}${data.image}`}
            alt={data.title}
          />
        ) : (
          <NoneImage data={data} />
        )}
      </ImageContainer>
      <div>
        <span>{`${data.university}/${data.major}`}</span>
        <h2>{data.title}</h2>
      </div>
    </Container>
  )
}

export default SlickListItem
