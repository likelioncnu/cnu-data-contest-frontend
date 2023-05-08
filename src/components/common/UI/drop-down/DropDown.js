function DropDown({children, visibility}) {
  return (
    <article>
      {visibility && children}  
    </article>
  )
}

export default DropDown