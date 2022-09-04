import React from 'react';
import TodoList from './todoList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import About from './About';
import Error from './Error';

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