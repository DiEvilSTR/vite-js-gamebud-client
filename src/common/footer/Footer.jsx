import './footer.css'
import logo from '/src/assets/brand/logo.svg'

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className='gamebud__footer-links'>
      <div className='gamebud__footer-links_logo'>
        <img src={ logo } alt="" />
        <p>Tokyo, All Right Reserved</p>
      </div>
      <div className='gamebud__footer-links_div'>
        <h4>Links</h4>
        <p><a href="#home">Home</a></p>
        <p><a href="#home">Home</a></p>
        <p><a href="#home">Home</a></p>
        <p><a href="#home">Home</a></p>
      </div>
      <div className='gamebud__footer-links_div'>
        <h4>Company</h4>
        <p><a href="#home">Home</a></p>
        <p><a href="#home">Home</a></p>
        <p><a href="#home">Home</a></p>
        <p><a href="#home">Home</a></p>
      </div>
      <div className='gamebud__footer-links_div'>
        <h4>Get in touch</h4>
        <p><a href="#home">Home</a></p>
        <p><a href="#home">Home</a></p>
        <p><a href="#home">Home</a></p>
        <p><a href="#home">Home</a></p>
      </div>
    </div>
    <div className="gamebud__footer-copyright">
      <p>@2023 GameBud. All rights reserved.</p>
    </div>
  </div>
);

export default Footer