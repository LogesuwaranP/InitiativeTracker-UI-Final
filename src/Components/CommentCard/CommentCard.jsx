import React from 'react'
import "./CommentCard.css"
const CommentCard = ({name,comments, commentsDate}) => {
  return (
    <div className='comments-container'>
        <p>{comments}</p>
        <div className='comments-lable'>
            <div>
                <img src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'/>
                <p>{name}</p>
            </div>
            <p>{commentsDate}</p>

        </div>
              
    </div>
  )
}

export default CommentCard
