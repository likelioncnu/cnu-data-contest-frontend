import { ListItem } from './WatchList.style'

import Watch from '../../assets/images/watch.png'

function WatchListItem({ listItem }) {
  return <ListItem>
    <span>[공모전] title</span>
    <img src={Watch} alt="watch"></img>
    </ListItem>
}

export default WatchListItem
