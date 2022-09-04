import {NavLink} from 'react-router-dom';

function Header() {
    return (
      <nav>
          <ul className='menu'>
            <li><NavLink to="/todo-react-app/">Main</NavLink></li>
            <li><NavLink to="/todo-react-app/about">About</NavLink></li>
          </ul>
      </nav>
    );
}
  
export default Header;