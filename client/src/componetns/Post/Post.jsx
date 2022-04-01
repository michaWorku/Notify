import React, {useState} from 'react'
import './Post.scss'
import  {images} from '../../constants'

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false)
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
                onClick={()=> setLiked(false)}
              />) :
              (<img
                src={images.Heart}
                alt="heart icon"
                className="cardIcon"
                onClick={()=> setLiked(true)}
              />)
          }
          <img
            src={images.Comment}
            alt="comment icon"
            className="cardIcon"
          />
          <img
            src={images.Share}
            alt="share icon"
            className="cardIcon"
          />
        <img src={images.Info} alt="" className="cardIcon infoIcon" />
      </div>
    </div>
  )
}

export default Post