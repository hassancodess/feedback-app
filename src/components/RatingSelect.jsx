import { useState, useEffect, useContext } from 'react'
import Ratings from '../data/Ratings'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
  const ratings = Ratings
  const { itemEdit } = useContext(FeedbackContext)
  const [selected, setSelected] = useState(10)

  useEffect(() => {
    if (Object.keys(itemEdit.item).length != 0) {
      setSelected(itemEdit.item.rating)
    } else {
      setSelected(10)
    }
  }, [itemEdit])

  const handleChange = (e) => {
    select(+e.target.value)
    setSelected(+e.target.value)
  }
  return (
    <ul className='rating'>
      {ratings.map((item, idx) => (
        <li key={idx}>
          <input
            type='radio'
            name='rating'
            id={`${item.id}`}
            value={`${item.value}`}
            onChange={handleChange}
            checked={selected == +item.value}
          />
          <label htmlFor={`${item.id}`}>{item.value}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
