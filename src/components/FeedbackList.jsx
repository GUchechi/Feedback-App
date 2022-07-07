import React from 'react'
import Feedbackitem from './Feedbackitem'

function FeedbackList({feedback, handleDelete}) {
  return (
    <div className='Feedback-list'>
        {feedback.map((item) => (
            <Feedbackitem key={item.id} item = {item}
             handleDelete = {handleDelete}/>
        ))}
    </div>
  )
}

export default FeedbackList