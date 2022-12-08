import React from 'react';
import { useEffect } from 'react';

const Step4 = ({setPage, phone, setPhone, region, setRegion}) => {
  useEffect(() => setPage(4), []);

  const handlePhone = (e) => {
    setPhone(e.currentTarget.value);
  }

  const handleRegion = (e) => {
    setRegion(e.currentTarget.value);
  }

  return (
    <form className='mt-6 flex flex-col justify-center items-end'>
      <div className='flex flex-row justify-center items-center'>
        <p>Телефон:&nbsp;&nbsp;</p>
        <input onChange={handlePhone} value={phone} type="number" placeholder="Введіть Ваш телефон" className='text-black border-gray-400 border-2 py-1 px-3' required/>
      </div>
      <div className='mt-4 flex flex-row justify-center items-center self-center'>
        <p>Регіон:&nbsp;&nbsp;</p>
        <select onChange={handleRegion} name="region" id="" value={region} className='text-black'>
          <option value="europe">Європа</option>
          <option value="america">Америка</option>
          <option value="africa">Африка</option>
          <option value="asia">Азія</option>
        </select>
      </div>
    </form>
  )
}

export default Step4