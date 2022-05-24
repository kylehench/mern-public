import './App.css';

function App() {
  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={ handleFormSubmit } className="container d-flex form-inline align-items-center" style={{width:'720px'}}>
        <label htmlFor="category" className='me-2'>Search for:</label>
        <select name="category" className="form-select me-4 my-2" style={{width:'220px'}}>
          <option value="none" defaultValue hidden>--- Select an Option ---</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <label htmlFor="ID" className='me-2'>ID:</label>
        <input type="number" className="form-control me-4" name="ID" min="1" style={{width:'70px'}} />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default App;
