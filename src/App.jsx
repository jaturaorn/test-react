import { useState } from 'react'
import './App.css'

function App() {
  const [Name, setName] = useState(0)

  return (
    <div>
      <section className='BoxLG'>
          <h1>ToDos APP</h1>
        <form className='form-box'>
          <div className='form-boxs'>
            <input type='text' className='text-input' placeholder="ToDos" 
              onChange={(e) => setName(e.target.value)} 
              value={Name}
            />

            <button type='submit' className='submit-btn'>Add Dos</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default App
