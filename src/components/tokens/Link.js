function Link({ textLink, primary, redirection }) {
  return ( 
    <a 
      className={`${primary ? "link-primary" : "link"}`}
      href={redirection}>
      {textLink.toUpperCase()}
    </a>
  )
}

export default Link;
