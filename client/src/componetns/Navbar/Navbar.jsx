import React from 'react'
import './Navbar.scss'
import  {images} from '../../constants'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Notify</span>
      <div className="icons">
        <div className="icon">
            <img src={images.Notification} className="iconImg" alt="" />
            <div className="counter">3</div>
        </div>
        <div className="icon">
            <img src={images.Message} className="iconImg" alt="" />
            <div className="counter">3</div>
        </div>   
        <div className="icon">
            <img src={images.Settings} className="iconImg" alt="" />
            <div className="counter">3</div>
        </div>        
            
      </div>
    </div>
  )
}

export default Navbar