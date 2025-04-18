"use client"
import React from 'react'
import Task from './components/Task/Task'
import Navbar from './components/Navbar/Navbar'

const page = () => {
  return (
    <>
    <div> 
      <Navbar/>
      <Task />
    </div>
    </>
  )
}

export default page
