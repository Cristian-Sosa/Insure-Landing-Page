function Link({ textLink, primary, redirection }) {
  return ( 
    <a 
      className='link'
      href={redirection}>
      {textLink.toUpperCase()}
    </a>
  )
}
export default Link;