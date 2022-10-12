import {useState} from 'react';
import TodoList from './components/todoList.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.js';
import About from './components/About.js';
import Error from './components/Error.js';
import ThemeContext from './context/ThemeContext'

const Main = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if(localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    } else {
      localStorage.setItem('theme', 'dark')
      return 'dark'
    }
  })

  let themeClasses = {
    root: '',
    aLink: '',
    h1: '',
    paragraph: '',
    menu: '',
    todoInput: '',
    todoCon: '',
    doneBtn: '',
    deleteBtn: '',
    inContainer: '',
  }

  if (currentTheme === 'dark') {
    themeClasses.root = 'root-element root-dark'
    themeClasses.aLink = 'a-dark'
    themeClasses.h1 = 'h1-dark'
    themeClasses.paragraph = 'p-dark'
    themeClasses.menu = 'menu menu-dark'
    themeClasses.todoInput = 'todo-input todo-input-dark'
    themeClasses.todoCon = 'todo-con todo-con-dark'
    themeClasses.doneBtn = 'done-btn done-btn-dark'
    themeClasses.deleteBtn = 'delete-btn delete-btn-dark'
    themeClasses.inContainer = 'in-container in-container-dark'
  } else {
    themeClasses.root = 'root-element root-light'
    themeClasses.aLink = 'a-light'
    themeClasses.h1 = 'h1-light'
    themeClasses.paragraph = 'p-light'
    themeClasses.menu = 'menu menu-light'
    themeClasses.todoInput = 'todo-input todo-input-light'
    themeClasses.todoCon = 'todo-con todo-con-light'
    themeClasses.doneBtn = 'done-btn done-btn-light'
    themeClasses.deleteBtn = 'delete-btn delete-btn-light'
    themeClasses.inContainer = 'in-container in-container-light'
  }

  return (
    <ThemeContext.Provider value={{currentTheme, setCurrentTheme, themeClasses}}>
      <div className={themeClasses.root}>
        <Router>
          <Header />
          <Routes>
            <Route path="/todo-react-app/" element={<TodoList />} />
            <Route path="/todo-react-app/about" element={<About />} />
            <Route path="/todo-react-app/error" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

function App() {
  return <Main />
}

export default App;