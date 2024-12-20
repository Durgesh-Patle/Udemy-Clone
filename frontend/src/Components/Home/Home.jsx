import React from 'react'
import ImageSlider from '../HomeComponents/ImageSlider'
import Courses from '../Courses/Courses'


const Home = () => {
  return (
    <div>
      <ImageSlider />
      <div className='px-4 py-5'>
        <h1 className='text-3xl font-bold'>All the skills you need in one place</h1>
        <h2 className='text-[#6a6f73] text-xl'>From critical skills to technical topics, Udemy supports your professional development.</h2>
      </div>
      <Courses />
    </div>
  )
}

export default Home
