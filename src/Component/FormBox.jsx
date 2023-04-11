import React from 'react'

const FormBox = () => {
  return (
    <>
        <form className='form-box'>
            <input type='text' className='text-input' placeholder="ToDos" />
            <button type='submit' className='submit-btn'>Add Dos</button>
        </form>
    </>
  )
}

export default FormBox