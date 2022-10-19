import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <FaExclamationTriangle className='text-danger' size='5em'/>
      <h1>404</h1>
      <p className='lead'>Sorry but the page you are looking for does not exist</p>
      <Link to='/' className='btn btn-primary'>Home</Link>
    </div>
  )
}
