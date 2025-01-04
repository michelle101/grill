import './navbar.css';
import {NavLink, Link} from 'react-router-dom' 
import logo from '../../img/grill_logo.png';
export const Navbar = () => {
  return (
    <nav><div>
        <Link to='/'><img className='logo' src={logo} alt='Grill House' /></Link>
        
        <ul>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/menu'>Menu</NavLink></li>
            <li><NavLink to='/specials'>Specials</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/method'>Method</NavLink></li>
        </ul>
    </div></nav>
  )
}
