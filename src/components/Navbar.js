import { useState } from 'react';
// Route
import Logo from '../assets/images/logo.svg';
import iconHamburger from '../assets/images/icon-hamburger.svg';
import iconClose from '../assets/images/icon-close.svg'
// Personal Components
import Link from './tokens/Link';
import Button from './tokens/Button'

function Navbar() {
  
  const [isToggle, setIsToggle] = useState(0);
  const toggleOn = document.querySelector('img.toggleOn');
  const toggleOff = document.querySelector('img.toggleOff');
  const navMenu = document.querySelector('div.links')
  
  const toggleMenu = () => {
    setIsToggle(!isToggle);

    if (!isToggle) {    
      toggleOn.classList.toggle('toggleOn-ocult');
      toggleOff.classList.toggle('toggleOff-ocult');
      navMenu.classList.toggle('links-show')
    } else {
      toggleOn.classList.toggle('toggleOn-ocult');
      toggleOff.classList.toggle('toggleOff-ocult');
      navMenu.classList.toggle('links-show')
    }
  };

  return (
    <nav className='navbar'>
      <img
        src={Logo}
        alt='insure logo' />

      <div className='toggleContainer'>
        <img
          className='toggleOn'
          src={iconHamburger}
          alt='hamburger icon' 
          onClick={toggleMenu} />

        <img
          className='toggleOff toggleOff-ocult'
          src={iconClose}
          alt='hamburger icon' 
          onClick={toggleMenu} />
      </div>

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

        <Button 
          textLink='View plans'
          primary={true}
          redirection='plans' />
      </div>
    </nav>
  );
};
export default Navbar;