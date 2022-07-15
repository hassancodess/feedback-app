import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'

import { useState } from 'react'
function App() {
  const [items, setItems] = useState(FeedbackData)
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }
  const handleAdd = (newFeedback) => {
    newFeedback.id = uuidv4()
    setItems([newFeedback, ...items])
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <div className='container'>
                <FeedbackForm addFeedback={handleAdd} />
                <FeedbackStats items={items} />
                <FeedbackList items={items} handleDelete={handleDelete} />
              </div>
              <AboutIconLink />
            </>
          }
        ></Route>
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
