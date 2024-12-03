import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import LoginPage from './Components/Navbar/LoginPage'
import SignUpPage from './Components/Navbar/SignUpPage'
import Home from './Components/Home/Home'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/sign-up' element={<SignUpPage/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
