import React, { useState } from 'react';
import './App.css';
import './assets/css/styles.css';
import { UserContext } from './context/UserContext';
import { AppRouter } from './router/AppRouter';

function App() {

  const [lang, setLang] = useState({lang: 'es'})


  return (
    <div className='App'>
      <UserContext.Provider 
        value={ {
          lang,
          setLang
        }}
      >
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
}

export default App;
