import React from 'react';
import TodoList from './components/todoList.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.js';
import About from './components/About.js';
import Error from './components/Error.js';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/todo-react-app/" element={<TodoList />} />
          <Route path="/todo-react-app/about" element={<About/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;