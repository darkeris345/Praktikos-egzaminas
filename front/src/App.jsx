import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Procedures from './components/Procedures';
import AdminPage from './pages/AdminPage';
import { useState, useEffect } from 'react';



function App() {

  const [update, setUpdate] = useState(false);

  useEffect(() => {
   
  }, [update]);

  return (
    <>
      
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/admin' element={<AdminPage />}/>
          <Route path='/pro' element={<Procedures setUpdate={setUpdate} update={update} />}/>
        </Routes>
      
    </>
  )
}

export default App
