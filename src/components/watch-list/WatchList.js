import { Container } from './WatchList.style'
import WatchListItem from './WatchListItem'

// parameter: username, 대학, 학과, 학번, [관심학과]

function WatchList({ watchList }) {
  return (
    <Container>
      <h2>관심 대외활동</h2>
      <ul>
        <WatchListItem />
      </ul>
    </Container>
  )
}

export default WatchList
