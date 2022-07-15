import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  // States
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const { addItem, itemEdit, updateItem } = useContext(FeedbackContext)
  // Check if itemEdit is True
  useEffect(() => {
    if (itemEdit.edit) {
      setBtnDisabled(false)
      setText(itemEdit.item.text)
      setRating(itemEdit.item.rating)
    }
  }, [itemEdit])
  // Handle Text Field Change
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
  // Handle Submit Event
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (itemEdit.edit === true) {
        updateItem(itemEdit.item.id, newFeedback)
      } else {
        addItem(newFeedback)
      }
    }
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
