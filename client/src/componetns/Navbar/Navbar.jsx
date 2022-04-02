import React, {useState, useEffect} from 'react'
import './Navbar.scss'
import  {images} from '../../constants'

const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket?.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({ senderName, type }) => {
    
    return (
      <span className="notification">{`${senderName} ${type} your post.`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <span className="logo">Notify</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)} >
            <img src={images.Notification} className="iconImg" alt="" />
            {
              notifications.length >0 &&
                <div className="counter">{notifications.length}</div>
          }
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
            <img src={images.Message} className="iconImg" alt="" />
             
        </div>   
        <div className="icon" onClick={() => setOpen(!open)}>
            <img src={images.Settings} className="iconImg" alt="" />
             
        </div>        
        {open && (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar