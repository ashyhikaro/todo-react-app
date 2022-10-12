import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext'

function About() {
  const {themeClasses} = useContext(ThemeContext)
  
  return (
    <>
      <h1 className={themeClasses.h1}>About</h1>
      <p className={'about-description ' + themeClasses.paragraph}>Hello! This is a Todolist project developed on 
        the React framework. You can use it for your own purposes, 
        the code is completely open, all you need is to download the files, and enter 
        the command <strong>npm install</strong> in the terminal
        Thank you!!
      </p>
    </>
  );
}
  
export default About;