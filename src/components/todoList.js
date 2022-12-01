import React from 'react';
import { useEffect } from 'react';
import {useState, useRef, useContext} from 'react';
import ThemeContext from '../context/ThemeContext'
import {BottomPanel} from './BottomPanel.js';

function TodoList() {
  const [todos, setTodo] = useState(() => localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
  const {themeClasses} = useContext(ThemeContext)
  const inputRef = useRef()

  const createTodo = () => {
    if (inputRef.current.value.trim().length === 0) {
      alert('Note can not be empty')
      return
    }

    let newTodo = {
      title: inputRef.current.value,
      done: false,
      className: 'todo ',
      classNameContainer: 'todo-con ',
    }
    inputRef.current.value = ''
    setTodo([...todos, newTodo])
  }

  const doTodoDone = (e) => {
    e.target.closest('.left-side-con').childNodes[1].classList.toggle('todo-done')
    console.log(todos)
    let mainTarget = todos[e.target.closest('.todo-con').id]
    mainTarget.done = !mainTarget.done 
    if (!mainTarget.done) {
      mainTarget.className = 'todo '
      mainTarget.classNameContainer = 'todo-con '
    } else {
      mainTarget.classNameContainer = 'todo-con todo-con-done '
      mainTarget.className = 'todo todo-done '
    }
    setTodo([...todos])
  }

  const deleteTodo = (e) => {
    let mainTarget = +e.target.closest('.todo-con').id
    const newTodoList = [...todos.slice(0, mainTarget), ...todos.slice(1 + mainTarget)]
    setTodo(newTodoList)
  }

  const selectAll = () => {
    let status = todos.map((todo) => todo.done)
    let newArr = todos.map((todo) => {
      if (status.includes(false)) {
        todo.done = true
        todo.classNameContainer = 'todo-con todo-con-done '
        todo.className = 'todo todo-done '
      } else {
        todo.done = false
        todo.classNameContainer = 'todo-con '
        todo.className = 'todo '
      }
      return todo
    })
    setTodo(newArr)
  }

  useEffect(() => {
    if (todos.length === 0) {
      localStorage.setItem('todos', '[]')
    }
  }, [todos])

  return (
    <>
      <h1 className={themeClasses.h1}>TODOLIST</h1>
      <div className={themeClasses.inContainer}>
        <input type="text" className={themeClasses.todoInput} ref={inputRef} placeholder='Enter your note' maxLength='100'/>
        <button className='add-btn' onClick={createTodo}>add</button>
      </div>
      <div className='container'>

        {todos.length !== 0 ? todos.map((todo, index) => {
          localStorage.setItem('todos', JSON.stringify(todos))
          return  ( <div className={todo.classNameContainer + themeClasses.todoCon} key={index} id={index}>
                      <div className='left-side-con'>
                        <button type="button" className={themeClasses.doneBtn} onClick={doTodoDone}>&#10003;</button>
                        <p className={todo.className + themeClasses.paragraph}>{todo.title}</p>
                      </div>
                      <button className={themeClasses.deleteBtn} onClick={deleteTodo}>&#x1F5D1;</button>
                    </div>
          )
        }) : null}

        {todos.length === 0 ? null : <BottomPanel selectAll={selectAll} setTodo={setTodo}/>}

      </div>
    </>
  );
}

export default TodoList;