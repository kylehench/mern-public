import './App.css';
import { useState } from 'react'

function App() {
  const [list, setList] = useState([
    { text: 'Make a shopping list for dinner', complete: false},
    { text: 'Go to store', complete: false}
  ])

  const [itemInput, setItemInput] = useState('')
  const handleTodoSubmit = (e) => {
    e.preventDefault()
    setList([...list, {text: itemInput, complete: false}])
  }
  const handleTodoDelete = (index) => setList(list.filter((item, listIndex) => index !== listIndex))
  const toggleTodo = (index) => {
    setList(list.map((item, listIndex) => {
      if (index === listIndex) {
        item.complete = !item.complete
      }
      return item
    }))
  }

  return (
    <div className="App container">
      <form onSubmit={ handleTodoSubmit }>
        <input type="text" name="DESCRIPTION" className="form-control my-2" onChange={ (e) => setItemInput(e.target.value) }/>
        <input type="submit" value="Add" className="btn btn-primary"></input>
      </form>
      { list.map( (item, index) => {
        const todoClasses = ['ms-2']
        if (item.complete) todoClasses.push('line-through')
        return (
        <div key={ index } className='my-2 d-flex align-items-center justify-content-between'>
          <div>
            <input type="checkbox" onChange = {
              (e) => toggleTodo(index)
            } checked={ item.complete } />
            <span className={todoClasses.join(' ')}>{ item.text }</span>
          </div>
          <button onClick={ (e) => handleTodoDelete(index)} className="btn btn-danger">Delete</button>
        </div>
        )}
      )}
    </div>
  );
}

export default App;