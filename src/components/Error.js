import {NavLink} from 'react-router-dom';
import {useContext} from 'react';
import errorImg from './error-img/error-img-min.png'
import ThemeContext from '../context/ThemeContext'

function Error() {
  const {themeClasses} = useContext(ThemeContext)

  return (
    <>
      <p style={{width: '20%', marginLeft: '20px'}} className={themeClasses.paragraph}>This is an example of a custom error page</p>
      <h1 style={{margin: 'auto', marginTop: '15vh',width: '50%'}} className={themeClasses.h1}>You shouldn't be here. Take some rest and go <NavLink className={themeClasses.aLink} to="/todo-react-app/">home</NavLink></h1>
      <img src={errorImg} alt="error" style={{marginTop: "30px"}} width='220px'/>
    </>
  );
}
  
export default Error;