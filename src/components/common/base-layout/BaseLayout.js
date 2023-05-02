import Header from '../header'

const BaseLayout = ({ children }) => {
  return(
    <div>
      <Header />
      {children}
    </div>
  )
}

export default BaseLayout
