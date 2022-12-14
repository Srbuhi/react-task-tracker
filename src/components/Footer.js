import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <Link className="link" to="/about">About</Link>
    </footer>
  )
}

export default Footer
