import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className='container'>
      <Card>
        <h4>This is an About Page</h4>
        <Link to='/'>
          <button>Go to Home Page</button>
        </Link>
      </Card>
    </div>
  )
}

export default About
