import React from 'react';
import {useState, useRef, useCallback} from 'react';

function TodoList() {
  const [todos, setTodo] = useState(() => localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
  const inputRef = useRef()

  const createTodo = useCallback(() => {
    let newTodo = {
      title: inputRef.current.value,
      done: false,
      className: 'todo',
      classNameContainer: 'todo-con',
    }
    inputRef.current.value = ''
    setTodo([...todos, newTodo])
  }) 

  const doTodoDone = useCallback((e) => {
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
  }) 

  const deleteTodo = useCallback((e) => {
    let mainTarget = e.target.closest('.todo-con').id
    e.target.closest('.todo-con').childNodes[0].childNodes[1].classList.remove('todo-done')
    setTodo([...todos.slice(0, mainTarget), ...todos.slice(++mainTarget)]) 
  })

  const selectAll = useCallback(() => {
    let newArr = todos.map((todo) => {
      if (!todo.done) {
        todo.done = true
        todo.className = 'todo'
        todo.classNameContainer = 'todo-con'
      } else {
        todo.done = false
        todo.classNameContainer = 'todo-con todo-con-done'
        todo.className = 'todo todo-done'
      }
      return todo
    })
    setTodo(newArr)
  })

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

        {todos.length === 0 ? null : 
          <div className='bottom-btns-container'>
            <button className='select-all-btn' onClick={selectAll}>select all</button>
            <button className='delete-all-btn' onClick={() => setTodo([])}>delete all</button>
          </div>
        }

      </div>
    </>
  );
}

export default TodoList;