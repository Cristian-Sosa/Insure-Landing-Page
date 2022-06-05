import Logo from '../assets/images/logo.svg'

// Personal Components
import Link from './tokens/Link'

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={Logo} alt='insure logo' />
      <div className='links'>
      <Link 
        textLink='How we work'
        primary={false} 
        redirection='/how-we-work' />
      <Link 
        textLink='Blog'
        primary={false}
        redirection='blog' />
      <Link 
        textLink='Account'
        primary={false}
        redirection='account' />

      <Link 
        textLink='View plans'
        primary={true}
        redirection='plans' />
      </div>
    </nav>
  );
}

export default Navbar;