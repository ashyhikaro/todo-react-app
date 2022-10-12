import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import ThemeContext from '../context/ThemeContext'

function Header() {
  const {currentTheme, setCurrentTheme, themeClasses} = useContext(ThemeContext)

  let switchTheme = () => {
    if (currentTheme === 'dark') {
      console.log(currentTheme)
      localStorage.setItem('theme', 'light')
      setCurrentTheme('light')
    } else {
      localStorage.setItem('theme', 'dark')
      setCurrentTheme('dark')
    }
  }

  return (
    <nav>
        <ul className={themeClasses.menu}>
          <li><NavLink className={themeClasses.aLink} to="/todo-react-app/">Main</NavLink></li>
          <li><NavLink className={themeClasses.aLink} to="/todo-react-app/about">About</NavLink></li>
          <li><NavLink className={themeClasses.aLink} to="/todo-react-app/error">Error</NavLink></li>
          <li className='switcher' onClick={switchTheme}>
            {currentTheme === 'dark' ? <p><span style={{color: 'yellow'}}>&#9728;</span> Day</p> 
                                    : <p className='p-light'><span style={{fontSize: '24px'}}>&#127761;</span> Night</p>
            }
          </li>
        </ul>
    </nav>
  );
}
  
export default Header;