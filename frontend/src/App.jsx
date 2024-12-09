import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import LoginPage from './Components/Navbar/LoginPage'
import SignUpPage from './Components/Navbar/SignUpPage'
import Home from './Components/Home/Home'
import PricingPlans from './Components/Home/PricingPlans'
import DemoForm from './Components/Home/DemoForm'
import HomeTeach from './Components/TechOnUdemy/HomeTeach'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api/login' element={<LoginPage />} />
        <Route path='/api/sign-up' element={<SignUpPage />} />

        <Route path='/pricing' element={<PricingPlans />} />
        <Route path='/business' element={<DemoForm />} />
        <Route path='/teaching' element={<HomeTeach/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
