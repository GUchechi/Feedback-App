import React from 'react'
import {useState} from 'react'

function Feedbackitem() {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of a feedback item')
    const handleClick = () => {
        setRating((prev) => prev + 1)
    }

  return (
    <div className="card">
        <div className='num-display'>{rating}</div>
        <div className='text-dispaly'>{text}</div>
        <button onClick={handleClick}>Click me!!!</button>
    </div>
  )
}

export default Feedbackitem