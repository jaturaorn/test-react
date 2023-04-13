import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [Name, setName] = useState('')
  const [List, setList] = useState([])

  // เก็บข้อมูลผ่าน func โดย state setList ผ่าน array
  const submitData = (e) => {
    // ดักจับ Evnet ใน form
    e.preventDefault()
    const newItem = {
        id:uuidv4(),
        title:Name
    }
    setList([...List,newItem]) 
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
