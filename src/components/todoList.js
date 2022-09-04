import React from 'react';
import {useState, useRef} from 'react';
import {BottomPanel} from './BottomPanel.js';

function TodoList() {
  const [todos, setTodo] = useState(() => localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
  const inputRef = useRef()

  const createTodo = () => {
    let newTodo = {
      title: inputRef.current.value,
      done: false,
      className: 'todo',
      classNameContainer: 'todo-con',
    }
    inputRef.current.value = ''
    setTodo([...todos, newTodo])
  }

  const doTodoDone = (e) => {
    e.target.closest('.left-side-con').childNodes[1].classList.toggle('todo-done')
    let mainTarget = todos[e.target.closest('.todo-con').id]
    mainTarget.done = !mainTarget.done 
    if (!mainTarget.done) {
      mainTarget.className = 'todo'
      mainTarget.classNameContainer = 'todo-con'
    } else {
      mainTarget.classNameContainer = 'todo-con todo-con-done'
      mainTarget.className = 'todo todo-done'
    }
    setTodo([...todos])
  }

  const deleteTodo = (e) => {
    let mainTarget = e.target.closest('.todo-con').id
    e.target.closest('.todo-con').childNodes[0].childNodes[1].classList.remove('todo-done')
    setTodo([...todos.slice(0, mainTarget), ...todos.slice(++mainTarget)]) 
  }

  const selectAll = () => {
    let status = todos.map((todo) => todo.done)
    let newArr = todos.map((todo) => {
      if (status.includes(false)) {
        todo.done = true
        todo.classNameContainer = 'todo-con todo-con-done'
        todo.className = 'todo todo-done'
      } else {
        todo.done = false
        todo.classNameContainer = 'todo-con'
        todo.className = 'todo'
      }
      return todo
    })
    setTodo(newArr)
  }

  return (
    <>
      <h1>TODOLIST</h1>
      <div className='in-container'>
        <input type="text" className='todo-input' ref={inputRef} placeholder='Enter your note' maxLength='100'/>
        <button className='add-btn' onClick={createTodo}>add</button>
      </div>
      <div className='container'>

        {todos.length !== 0 ? todos.map((todo, index) => {
          localStorage.setItem('todos', JSON.stringify(todos))
          return  ( <div className={todo.classNameContainer} key={index} id={index}>
                      <div className='left-side-con'>
                        <button type="button" className='done-btn' onClick={doTodoDone}>&#10003;</button>
                        <p className={todo.className}>{todo.title}</p>
                      </div>
                      <button className='delete-btn' onClick={deleteTodo}>&#x1F5D1;</button>
                    </div>
          )
        }) : localStorage.clear()}

        {todos.length === 0 ? null : <BottomPanel selectAll={selectAll} setTodo={setTodo}/>}

      </div>
    </>
  );
}

export default TodoList;