import React from 'react';
import { useEffect } from 'react';

const Step5 = ({setPage, terms, setTerms}) => {
  useEffect(() => setPage(5), []);
  const handleTerms = (e) => {
    setTerms(e.currentTarget.checked);
  }
  return (
    <form className='mt-6 w-[25%] flex flex-col justify-center items-start'>
      <textarea name="" id="agreement" className='w-full h-[120px] py-2 px-3  border-gray-400 border-2' disabled
        value='УМОВИ КОРИСТУВАННЯ: 
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'>
      </textarea>
      <div className='mt-2 flex flex-row'>
        <input onClick={handleTerms} id="confirm" type="checkbox" required defaultChecked={terms ? 'checked' : 0}/>
        <label htmlFor="confirm" className='ml-1'>Погоджуюсь з умовами</label>
      </div>
    </form>
  )
}

export default Step5