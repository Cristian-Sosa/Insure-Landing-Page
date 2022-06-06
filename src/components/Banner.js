// Components imports
import Button from './tokens/Button';

function Banner() {
  return (
    <header className='banner'>
      <div className='bannerContainer'>
        <h1 className='bannerTitle'>
          Humanizing your insurance.
        </h1>
        <p className='bannerDescription'>
          Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.
        </p>
        <Button
           textLink='View plans'
           primary={false}
           redirection='/plans'/>
      </div>

      <figure className='bannerImage'></figure>
    </header>
  );
}
export default Banner;
