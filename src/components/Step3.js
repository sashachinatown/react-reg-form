import React from 'react';
import { useEffect } from 'react';

const Step3 = ({setPage, nickname, setNickname, subscr, setSubscr}) => {
  useEffect(() => setPage(3), []);

  const handleNickname = (e) => {
    setNickname(e.currentTarget.value);
  }

  const handleSubscr = (e) => {
    setSubscr(e.currentTarget.value);
  }

  return (
    <form className='mt-6 flex flex-col justify-center items-end'>
      <div className='flex flex-row justify-center items-center'>
        <p>Нікнейм (ім'я профілю):&nbsp;&nbsp;</p>
        <input onChange={handleNickname} value={nickname} type="text" placeholder="Введіть ім'я профілю" className='text-black border-gray-400 border-2 py-1 px-3' required/>
      </div>

      <div className='mt-4 flex flex-row justify-center items-start self-center'>
        <p>Тип підписки:&nbsp;&nbsp;</p>
        <div className='ml-2 flex flex-col items-start'>

          <div className='flex flex-row justify-center'>
            <input 
              onChange={handleSubscr}
              type="radio" 
              id="sub1"
              name="subscription" 
              value="basic" 
              defaultChecked={subscr === 'basic' ? 'checked' : 0}/>
            <label htmlFor="sub1" className='ml-1'>Базова (безкоштовно)</label>
          </div>

          <div className='flex flex-row justify-center'>
            <input 
              onChange={handleSubscr}
              type="radio" 
              id="sub2"
              name="subscription" 
              value="standard"
              defaultChecked={subscr === 'standard' ? 'checked' : 0}/>
            <label htmlFor="sub2" className='ml-1'>Стандарт (75 грн/міс.)</label>
          </div>

          <div className='flex flex-row justify-center'>
            <input 
              onChange={handleSubscr}
              type="radio" 
              id="sub3"
              name="subscription" 
              value="premium"
              defaultChecked={subscr === 'premium' ? 'checked' : 0}/>
            <label htmlFor="sub3" className='ml-1'>Преміум (125 грн/міс.)</label>
          </div>

        </div>
      </div>
    </form>
  )
}

export default Step3