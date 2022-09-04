import {NavLink} from 'react-router-dom';
import errorImg from './error-img/error-img-min.png'

function Error() {
  return (
    <>
      <p style={{width: '20%', marginLeft: '20px'}}>This is an example of a custom error page</p>
      <h1 style={{
        margin: 'auto', 
        marginTop: '15vh',
        width: '50%'
      }}>You shouldn't be here. Take some rest and go <NavLink to="/todo-react-app/">home</NavLink></h1>
      <img src={errorImg} alt="error" style={{marginTop: "30px"}} width='220px'/>
    </>
  );
}
  
export default Error;