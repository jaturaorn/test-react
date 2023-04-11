import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section className='BoxLG'>
          <h1>ToDos APP</h1>
        <form className='form-box'>
            <input type='text' className='text-input' placeholder="ToDos" />
            <button type='submit' className='submit-btn'>Add Dos</button>
        </form>
      </section>
    </div>
  )
}

export default App
