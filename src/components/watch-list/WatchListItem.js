import { ListItem } from './WatchList.style'

import Watch from '../../assets/images/watch.png'

function WatchListItem({ listItem }) {
  return <ListItem>
    <span>[취업/인턴]
      <br/>
      (TIPS타운 X 소프트웨어중심대학사언단) TIPS타운 연계 백마인턴십</span>
    <img src={Watch} alt="watch"></img>
    </ListItem>
}

export default WatchListItem
