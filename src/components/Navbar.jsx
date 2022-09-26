import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/users">User</Link>
    </div>
  )
}

export default Navbar
