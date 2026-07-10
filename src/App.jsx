import React from 'react'
import Navbar from './Components/Navbar'
import UserCard from './Components/UserCard'
import Form from './Components/Form'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState(()=> {
     return JSON.parse(localStorage.getItem("user")) || [];
  });

  const [updatedData, setUpdatedData] = useState(null);

  
  
  
  const [toggle, setToggle] = useState(false);

  let handleDelete = (id) => {
    let filteredData = user.filter((val,index)=>{
      return index !== id;
    })
    console.log(filteredData);
    setUser(filteredData);

    localStorage.setItem('user',JSON.stringify([...filteredData]))
  }


  return (
    <div className='flex flex-col h-screen bg-gray-100 p-4 gap-4'>
      <Navbar setToggle={setToggle}/>
      {toggle?<div className='flex gap-6 flex-wrap'>  
      {user.map((e,index)=> {
        return <UserCard setUpdatedData={setUpdatedData} ind={index} user={e} key={index} setToggle={setToggle} handleDelete={handleDelete}/>
      })}
      </div>:
      <Form updatedData={updatedData}
            user={user}
            setUser={setUser}
            setToggle={setToggle}/>}
    </div>
  )
}

export default App
