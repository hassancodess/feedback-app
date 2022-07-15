import { useState, useEffect, useContext } from 'react'
import Ratings from '../data/Ratings'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
  const ratings = Ratings
  const { itemEdit } = useContext(FeedbackContext)
  const [selected, setSelected] = useState(10)

  useEffect(() => {
    setSelected(itemEdit.item.rating)
  }, [itemEdit])

  const handleChange = (e) => {
    setSelected(+e.target.value)
    select(+e.target.value)
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
            checked={selected === +item.value}
          />
          <label htmlFor={`${item.id}`}>{item.value}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
