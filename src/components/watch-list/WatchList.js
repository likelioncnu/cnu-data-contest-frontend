import { Container } from './WatchList.style'

// parameter: username, 대학, 학과, 학번, [관심학과]

const WatchListItem = ({ listItem }) => {
  return <li>[공모전] title</li>
}

function WatchList({ watchList }) {
  return (
    <Container>
      <h2>관심 대외활동</h2>
      <ul>{/* WatchListItem */}</ul>
    </Container>
  )
}

export default WatchList
