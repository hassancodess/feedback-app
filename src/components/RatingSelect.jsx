import { useState } from 'react'
import Ratings from '../data/Ratings'

function RatingSelect({ select }) {
  const ratings = Ratings
  const [selected, setSelected] = useState(10)
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
