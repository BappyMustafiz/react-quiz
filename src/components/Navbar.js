import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-bg.png';
import classes from '../styles/Nav.module.css';
import Account from './Account';
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to='/' href='index.html' className={classes.brand}>
            <img src={logo} alt='Learn with Sumit Logo' />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Navbar;
