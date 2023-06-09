import { ListItem } from './WatchList.style'

import Watch from '../../assets/images/watch.png'

function WatchListItem({ data }) {
  const { section, title } = data

  return (
    <ListItem>
      <span>
        [{section}]
        <br />
        {title}
      </span>
      <img
        src={Watch}
        alt="watch"
      ></img>
    </ListItem>
  )
}

export default WatchListItem
