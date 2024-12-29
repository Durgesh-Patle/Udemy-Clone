import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import LoginPage from './Components/Navbar/LoginPage';
import SignUpPage from './Components/Navbar/SignUpPage';
import Home from './Components/Home/Home';
import PricingPlans from './Components/Home/PricingPlans';
import DemoForm from './Components/Home/DemoForm';
import HomeTeach from './Components/TechOnUdemy/HomeTeach';
import ForgotPass from './Components/Navbar/ForgotPass';
import ResetPass from './Components/Navbar/ResetPass';
import CourseCreation from './Components/AdminPannel/CourseCreation';
import CourseDetails from './Components/DetailsCourse/CourseDetails';
import Carts from './Components/AddCarts/Carts';
import ChatBot from './Components/ChatBot/ChatBot';
import Success from './Components/PaymentStatus/Success';
import Cancel from './Components/PaymentStatus/Cancel';
import FileUpload from './Components/FileUploads/FileUpload';
import PageNotFound from './Components/404Page.jsx/PageNotFound';
import UsersProfile from './Components/AdminPannel/UsersProfile';
import AdminPanel from './Components/AdminPannel/AdminPanel';
import CourseStatus from './Components/AdminPannel/CourseStatus';

function App() {
  // let a = false;

  let token = localStorage.getItem('token');

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/' element={<AdminPanel />} />

        {!token &&
          <Route path="/api/login" element={<LoginPage />} />
        }

        {!token &&
          <Route path="/api/sign-up" element={<SignUpPage />} />
        }
        <Route path="/pricing" element={<PricingPlans />} />
        <Route path="/business" element={<DemoForm />} />
        <Route path="/teaching" element={<HomeTeach />} />
        <Route path="/api/forget-password" element={<ForgotPass />} />

        <Route path="/add-course" element={<CourseCreation />} />

        <Route path="/reset-password/:token" element={<ResetPass />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />

        <Route path="/upload" element={<FileUpload />} />

        <Route path="*" element={<PageNotFound />} />

        {/* Payment Status */}
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />


        {/* Admin Pannel */}
        <Route path='/users' element={<UsersProfile />} />
        <Route path='/admin' element={<AdminPanel />} />


        <Route path='/api/course-status' element={<CourseStatus />} />
        {/* <Route path='/dashboard' element={<Dashbord />} /> */}

      </Routes>

      <div className="fixed bottom-4 right-4">
        <button onClick={toggleChat} className="focus:outline-none">
          <img
            src="https://www.shutterstock.com/image-vector/chat-bot-icon-design-robot-600nw-2476207303.jpg"
            alt="Chatbot Icon"
            width={80}
            className="cursor-pointer rounded-full"
          />
        </button>
      </div>

      <div
        className={`fixed bottom-48 right-4  p-4 rounded-lg shadow-lg w-80 transition-transform duration-300 ease-in-out ${isChatOpen
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0 pointer-events-none'
          }`}
        style={{ height: '350px', width: '450px' }}
      >
        {isChatOpen && (
          <>
            <ChatBot />
            <button
              onClick={toggleChat}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
