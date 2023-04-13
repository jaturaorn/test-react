import { useState } from 'react'
import './App.css'

function App() {
  const [Name, setName] = useState('')
  // ดักจับ Evnet ใน form
  const submitData = (e) => {
    e.preventDefault()
    
  }
  return (
    <div>
      <section className='BoxLG'>
          <h1>ToDos APP</h1>
          {/* เมื่อมีการกด sumbitdata จะทำหน้าที่สร้างรายการ */}
        <form className='form-box' onSubmit={submitData}>
          <div className='form-boxs'>
            <input type='text' className='text-input' placeholder="ToDos" 
              onChange={(e) => setName(e.target.value)} 
              value={Name}
              //เมื่อกรอกข้อมูล (onChange) แล้วไปเก็บที่ตัวแปร Name
            />
            <button type='submit' className='submit-btn'>Add Dos</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default App
