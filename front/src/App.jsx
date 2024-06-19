import { Routes, Route } from 'react-router-dom';
// import { StateProvider } from "./utils/StateContext";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {


  return (
    <>
      {/* <StateProvider> */}
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
        </Routes>
      {/* </StateProvider> */}
    </>
  )
}

export default App
