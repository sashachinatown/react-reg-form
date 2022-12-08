import React from 'react'
import { useEffect } from 'react';

const Step2 = ({setPage, name, setName, surname, setSurname, gender, setGender}) => {
  useEffect(() => setPage(2), []);

  const handleName = (e) => {
    setName(e.currentTarget.value);
  }

  const handleSurname = (e) => {
    setSurname(e.currentTarget.value);
  }

  const handleGender = (e) => {
    setGender(e.currentTarget.value);
  }

  return (
    <form className='mt-6 flex flex-col justify-center items-end'>
      <div className='flex flex-row justify-center items-center'>
        <p>Ім'я:&nbsp;&nbsp;</p>
        <input onChange={handleName} value={name} type="text" placeholder="Введіть Ваше ім'я" className='text-black border-gray-400 border-2 py-1 px-3' required/>
      </div>
      <div className='mt-4 flex flex-row justify-center items-center'>
        <p>Прізвище:&nbsp;&nbsp;</p>
        <input onChange={handleSurname} value={surname} type="text" placeholder="Введіть Ваше прізвище" className='text-black border-gray-400 border-2 py-1 px-3' required/>
      </div>
      <div className='mt-4 flex flex-row justify-center items-center self-center'>
        <p>Стать:&nbsp;&nbsp;</p>
        <select onChange={handleGender} value={gender} name="gender" id="" className='text-black'>
          <option value="male">Чоловік</option>
          <option value="female">Жінка</option>
          <option value="ignore">Не вказувати</option>
        </select>
      </div>
    </form>
  )
}

export default Step2