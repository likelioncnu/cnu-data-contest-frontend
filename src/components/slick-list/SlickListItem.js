// data에 이미지가 없을 경우 이미지 부분에 제목과 본문을 채운다.
// 별을 누르면 별을 채우고 사용자의 관심활동에 추가시키도록 요청한다.

function SlickListItem({ data }) {
  return (
    <li>
      <div></div>
      <div>
        <h2>{data.title}</h2>
        <button></button>
      </div>
    </li>
  )
}

export default SlickListItem
