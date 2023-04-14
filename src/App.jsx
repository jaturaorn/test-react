import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import List from './Component/List';

function App() {
  const [Name, setName] = useState('')
  const [list, setList] = useState([])

  // เก็บข้อมูลผ่าน func โดย state setList ผ่าน array
  const submitData = (e) => {
    // ดักจับ Evnet ใน form
    e.preventDefault()
    const newItem = {
        id:uuidv4(),
        title:Name
    }
    setList([...list,newItem])
    // เก็บข้อมูลผ่าน func โดย state setList ผ่านเก็บ array
    setName('')
    // เวลากดแล้วให้เป็นค่าว่าง 
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
        <section className='list-box'>
          {list.map((data,index)=>{
            return <List/>
          })}
        </section>
      </section>
    </div>
  )
}

export default App
