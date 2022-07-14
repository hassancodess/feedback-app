import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ addFeedback }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)

    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be atleast more than 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeedback = {
      text,
      rating,
    }
    addFeedback(newFeedback)
    setText('')
    setRating(10)
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your services with us ?</h2>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={text}
            onChange={handleChange}
          />
          <Button type='submit' version='secondary' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
      <RatingSelect select={setRating} />
    </Card>
  )
}

export default FeedbackForm