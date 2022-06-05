import { useState } from 'react';
// Route
import Logo from '../assets/images/logo.svg';
import iconHamburger from '../assets/images/icon-hamburger.svg';
// Personal Components
import Link from './tokens/Link';

function Navbar() {
  const [isToggle, setIsToggle] = useState(0);

  const toggleMenu = () => {

  };

  return (
    <nav className='navbar'>
      <img
        src={Logo}
        alt='insure logo' />

      <img
        src={iconHamburger}
        alt='hamburger icon' 
        onClick={toggleMenu}/>

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
};
export default Navbar;