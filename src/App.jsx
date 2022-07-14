import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

import { useState } from 'react'
function App() {
  const [items, setItems] = useState(FeedbackData)
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you wanna delete?')) {
      setItems(items.filter((item) => item.id !== id))
    }
  }
  const handleAdd = (newFeedback) => {
    newFeedback.id = uuidv4()
    setItems([newFeedback, ...items])
  }
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm addFeedback={handleAdd} />
        <FeedbackStats items={items} />
        <FeedbackList items={items} handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App
