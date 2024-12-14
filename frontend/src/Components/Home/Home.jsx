import React from 'react'
import ImageSlider from '../HomeComponents/ImageSlider'
import Courses from '../Courses/Courses'
import CoursesNav from '../CourseNavbar/CoursesNav'
// import { Routes, Route } from 'react-router-dom'
// import DataSciense from '../CourseNavbar/DataSciense'
// import ItCertificate from '../CourseNavbar/ItCertificate'
// import Leadership from '../CourseNavbar/Leadership'
// import WebDev from '../CourseNavbar/WebDev'
// import BusinessAnalytics from '../CourseNavbar/BusinessAnalytics'

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <div className='px-4 py-5'>
        <h1 className='text-3xl font-bold'>All the skills you need in one place</h1>
        <h2 className='text-[#6a6f73] text-xl'>From critical skills to technical topics, Udemy supports your professional development.</h2>
      </div>
      <CoursesNav />
      <Courses />

      {/* Courses Options */}
      {/* <Routes>
        <Route path='/data-science' element={<DataSciense/>} />
        <Route path='/it-certificate' element={<ItCertificate />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/web-development' element={<WebDev />} />
        <Route path='/business-analytics' element={<BusinessAnalytics />} />
      </Routes>
      <hr /> <hr /> */}

    </div>
  )
}

export default Home
