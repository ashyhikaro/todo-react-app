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
          <Route path="/" element={<TodoList />} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;