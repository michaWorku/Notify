import React from 'react'
import './Post.scss'
import  {images} from '../../constants'

const Post = ({ post }) => {

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
          <img
            src={images.Heart}
            alt=""
            className="cardIcon"
          />
          <img
            src={images.Comment}
            alt=""
            className="cardIcon"
          />
          <img
            src={images.Share}
            alt=""
            className="cardIcon"
          />
        <img src={images.Info} alt="" className="cardIcon infoIcon" />
      </div>
    </div>
  )
}

export default Post