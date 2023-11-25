import './style.css'

const Header = () => {
  return (
    <div className='gamebud__header section__padding' id='home'>
      <div className='gamebud__header-content'>
      <h1 className='gradient__text'>
        Find Your Perfect Gaming Match <br />
        Play Together <br />
        Win Together
      </h1>
        <div className='gamebud__header-content__people'>
          <p>Join 666 people registered at GameBud</p>
        </div>

      </div>
      <div className="gamebud__header-content__sign-in-email-input">
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="button">Sign In</button>
      </div>
    </div>
  )
}

export default Header