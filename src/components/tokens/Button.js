function Button({ textLink, primary, redirection }) {
    return ( 
      <a 
        className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}
        href={redirection}>
        {textLink.toUpperCase()}
      </a>
    )
  }
  export default Button;