import React from 'react'
import Navbar from './Components/Navbar'
import UserCard from './Components/UserCard'
import Form from './Components/Form'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState([]);
 
  const [toggle, setToggle] = useState(false);


  return (
    <div className='flex flex-col h-screen bg-gray-100 p-4 gap-4'>
      <Navbar setToggle={setToggle}/>
      {toggle?<div className='flex gap-6'>  
      {user.map((e)=> {
        return <UserCard user={e}/>
      })}
      </div>:
      <Form setUser={setUser} setToggle={setToggle}/>}
    </div>
  )
}

export default App
