import { Container } from './SlickList.style'
import SlickListItem from './SlickListItem'

function SlickList({ subject, data }) {
  return (
    <Container>
      <div>
        <h1>{subject}</h1>
        <div>
          <div>left arrow</div>
          <ul>
            {/* data.map((item) => {
              <SlickListItem data={data} />
            }) */}
          </ul>
          <div>right arrow</div>
        </div>
      </div>
    </Container>
  )
}

export default SlickList
