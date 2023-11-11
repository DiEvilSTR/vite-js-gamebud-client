import './header.css'
import gamebudLogoSrc from '/src/assets/brand/gamebud.svg'

const Header = () => {
  return (
    <div className='gamebud__header section__padding' id='home'>
      <div className='gamebud__header-content'>
      <h1 className='gradient__text'>
        Find Your Perfect Gaming Match <br />
        Play Together <br />
        Win Together
      </h1>
        <p>GameBud is your premier gaming partner finder, designed to connect you with fellow gamers from around the world. Whether you’re looking to conquer co-op campaigns, dominate in competitive play, or just enjoy a casual game night, GameBud makes it easy to find the right players for your team.</p>
        <div className='gamebud__header-content__people'>
          <p>Join 666 people registered at GameBud</p>
        </div>

      </div>
      <div className='gamebud__header-image'>
        <img src={gamebudLogoSrc} alt="" />
      </div>
    </div>
  )
}

export default Header