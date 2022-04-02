import React, {useState} from 'react'
import './Post.scss'
import  {images} from '../../constants'
import { useAuthContext } from '../../context/auth/authContext';

const Post = ({ post, socket }) => {
  const [liked, setLiked] = useState(false)

  const { currentUser } = useAuthContext().state;

  const handleNotification = (type)=>{
   type === 'like' && setLiked(!liked)

   socket?.emit('sendNotification', {
     senderName: currentUser.email,
     receiverName: post.email,
     type
   })
  }

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
          {
            liked ? 
              (<img
                src={images.HeartFilled}
                alt="heart icon"
                className="cardIcon"
                onClick={()=>handleNotification('like')}
              />) :
              (<img
                src={images.Heart}
                alt="heart icon"
                className="cardIcon"
                onClick={()=>handleNotification('like')}
              />)
          }
          <img
            src={images.Comment}
            alt="comment icon"
            className="cardIcon"
            onClick={()=>handleNotification('comment')}
          />
          <img
            src={images.Share}
            alt="share icon"
            className="cardIcon"
            onClick={()=>handleNotification('share')}
          />
        <img 
            src={images.Info} 
            alt="" 
            className="cardIcon infoIcon" 
            onClick={()=>handleNotification('info')}
        />
      </div>
    </div>
  )
}

export default Post