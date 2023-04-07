import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {useGlobalStates} from '../Components/utils/global.context'

const Home = () => {
  const {doctor} = useGlobalStates()
      
  return (
    <main>
      <Navbar/>
      <h1>Home</h1>
      <div className='card-grid'>
        {doctor.map((item) => <Card id = {item.id} name = {item.name} username = {item.username}/>)}
      </div>
      <Footer/>
    </main>
  )
}

export default Home