import React from 'react';
import { useEffect } from 'react';

const Step1 = ({email, setEmail, password, setPassword}) => {
  const handleEmail = (e) => {
    setEmail(e.currentTarget.value);
  }
  const handlePassword = (e) => {
    setPassword(e.currentTarget.value)
  }
  return (
    <form className='mt-6 flex flex-col justify-center items-end'>
      <div className='flex flex-row justify-center items-center'>
        <p>Ел. пошта:&nbsp;&nbsp;</p>
        <input onChange={handleEmail} value={email} type="email" placeholder='Введіть email' className='text-black border-gray-400 border-2 py-1 px-3' required/>
      </div>
      <div className='mt-4 flex flex-row justify-center items-center'>
        <p>Пароль:&nbsp;&nbsp;</p>
        <input onChange={handlePassword} value={password} type="password" placeholder='Придумайте пароль' className='text-black border-gray-400 border-2 py-1 px-3' required/>
      </div>
    </form>
  )
}

export default Step1