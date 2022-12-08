import { Route, Routes, NavLink} from "react-router-dom";
import { useState } from "react";
import { Step1, Step2, Step3, Step4, Step5, RegEnd} from './components/export';

function App() {
  const [page, setPage] = useState(1);

  const [isLight, setIsLight] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('male');
  const [nickname, setNickname] = useState('');
  const [subscr, setSubscr] = useState('basic');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('europe');
  const [terms, setTerms] = useState(false);

  const [ended, setEnded] = useState(false);
  const [isCompletedAll, setIsCompletedAll] = useState(false);
  
  const fields = [email, password, name, surname, gender, nickname, subscr, phone, region];

  const checkCompletedAll = () => {
    if (fields.length === fields.filter(item => item.trim().length !== 0).length) {
      setIsCompletedAll(true);
    } else {
      setIsCompletedAll(false);
    }
  }

  const changeTheme = () => {
    setIsLight(!isLight);
  }

  const handleNextPage = () => {
    page < 5 ? setPage(page + 1) : setPage(5);
    checkCompletedAll();
  }

  const handlePrevPage = () => {
    page > 1 ? setPage(page - 1) : setPage(1);
    checkCompletedAll();
  }

  const handleEnded = () => {
    setEnded(true);
  }

  return (
    <div className={`App h-full flex flex-col justify-end items-center ${!isLight ? 'bg-black text-white' : 0}`}>
      <h2 className={`mt-10 text-xl ${ended ? 'hide' : 0}`}>Реєстрація (Крок {page}):</h2>

      <Routes>
        <Route path="/" element={!ended ? <Step1 email={email} setEmail={setEmail} password={password} setPassword={setPassword}/> : <RegEnd/>}/>
        <Route path="/1" element={!ended ? <Step1 email={email} setEmail={setEmail} password={password} setPassword={setPassword}/> : <RegEnd/>}/>

        <Route path="/2" element={!ended ? 
          <Step2 
            setPage={setPage}
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            gender={gender}
            setGender={setGender}/> : 
          <RegEnd/>
        }/>

        <Route path="/3" element={!ended ? 
          <Step3 
            setPage={setPage}
            nickname={nickname}
            setNickname={setNickname}
            subscr={subscr}
            setSubscr={setSubscr}/> : 
            <RegEnd/>
          }/>

        <Route path="/4" element={!ended ? 
          <Step4 
            setPage={setPage}
            phone={phone}
            setPhone={setPhone}
            region={region}
            setRegion={setRegion}/> : 
          <RegEnd/>
        }/>

        <Route path="/5" element={!ended ? 
          <Step5 
            setPage={setPage}
            terms={terms}
            setTerms={setTerms}/> : 
          <RegEnd/>
        }/>
        
        <Route path="/success" element={ended ? <RegEnd /> : <Step1/>}/>
      </Routes>
      
      <div className="btns-wrapper mt-8 mb-10 w-full flex flex-row justify-center items-center">
        <form action=""></form>
        
          <NavLink to={`/${page > 1 ? page - 1 : '1'}`}>
            <button onClick={handlePrevPage} id="prev" className={`nav-btn ${ended ? 'hide' : 0}`}>
              Назад
            </button>
          </NavLink>  

          <NavLink to={`/${page < 5 ? page + 1 : '5'}`}>
            <button onClick={handleNextPage} id="next" className={`nav-btn ml-6 ${page > 4 ? 'hide' : 0}`}>
              Наступний крок
            </button>
          </NavLink>

          <NavLink to='/success'>
            <button
                onMouseOver={checkCompletedAll} 
                onClick={handleEnded}
                type="submit" 
                id="end" 
                className={`ml-6 ${page !== 5 || ended ? 'hide' : 0} ${!isCompletedAll || !terms ? 'cursor-not-allowed nav-btn-blocked' : 'nav-btn'}`}
                disabled={!isCompletedAll || !terms ? 'disabled' : 0}>
                  Завершити {!isCompletedAll || !terms ? '(Ви не заповнили усі поля)' : 'реєстрацію'}
            </button>
          </NavLink>
      </div>
      <div
        onClick={changeTheme}
        className={`mb-[35vh] flex flex-row justify-center items-center cursor-pointer ${ended ? 'hide' : 0}`}>
        <p>Тема:</p>
        <div className={`theme ml-2 h-[25px] w-[25px] rounded-full border-2 ${isLight ? ' border-black' : 'border-white'}`}></div>
      </div>
    </div>
  );
}

export default App;
