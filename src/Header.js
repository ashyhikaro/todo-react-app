import {NavLink} from 'react-router-dom';

function Header() {
    return (
      <nav>
          <ul className='menu'>
            <li><NavLink to="/">Main</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
      </nav>
    );
}
  
export default Header;