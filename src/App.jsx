import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import FeedbackProvider from './context/FeedbackProvider'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <div className='container'>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>
                <AboutIconLink />
              </>
            }
          ></Route>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  )
}

export default App
