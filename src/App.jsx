import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import FormBox from './Component/FormBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header /><br />
      <FormBox />
    </div>
  )
}

export default App
