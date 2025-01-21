import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Agent from '../Pages/Agent'
import Agent2 from '../Pages/Agent2'
import Agent3 from '../Pages/Agent3'
import Agent4 from '../Pages/Agent4'
import Agent5 from '../Pages/Agent5'
import Agent6 from '../Pages/Agent6'
import Agent1 from '../Pages/Agent1'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Agent/>} />
        <Route path='/agent1' element={<Agent1/>} />
        {/* <Route path='/agent2' element={<Agent2/>} /> */}
        <Route path='/agent3' element={<Agent3/>} />
        <Route path='/agent4' element={<Agent4/>} />
        <Route path='/agent5' element={<Agent5/>} />
        <Route path='/agent6' element={<Agent6/>} />
    </Routes>
  )
}

export default AllRoutes