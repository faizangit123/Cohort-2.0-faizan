import React from 'react'
import { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [user, setUser] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userRole, setUserRole] = useState('')
  const [userDesc, setUserDesc] = useState('')

  const [allUsers, setAllUsers] = useState([])
  const submithandler = (e)=>{
    e.preventDefault()

    if(!user || !imageURL || !userRole || !userDesc){
      return
    }  
    const newUsersInfo ={
      name : user,
      role: userRole,
      image: imageURL,
      description: userDesc,
    } 

    setAllUsers([...allUsers, newUsersInfo])
    console.log(allUsers)

    setUser('')
    setImageURL('')
    setUserDesc('')
    setUserRole('')
  }


  return (
    <div className='h-screen bg-black text-blue-50'>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} className='px-2 py-10 flex-wrap justify-center'>
        <input 
        value={user} 
        onChange={(e)=>{
          setUser(e.target.value)
        }}
        className='border-2 px-5 py-2 rounded m-2 w-[45%] p-2' type='text' placeholder='Enter your name'></input>
        <input
        value={imageURL} 
        onChange={(e)=>{
          setImageURL(e.target.value)
        }}
         className='border-2 px-5 py-2 rounded m-2 w-[45%] p-2' type='text' placeholder='Enter your email'></input>
        <input 
        value={userRole} 
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
        className='border-2 px-5 py-2 rounded m-2 w-[45%] p-2' type='text' placeholder='Your role'></input>
        <input
        value={userDesc} 
        onChange={(e)=>{
          setUserDesc(e.target.value)
        }} 
        className='border-2 px-5 py-2 rounded m-2 w-[45%] p-2' type='text' placeholder='Your Position'></input>
        <button className=' bg-gray-900 active:scale-95 rounded px-5 py-2 m-2 w-[92%] ' type='submit'>create users</button>
      </form>

      <div className='px-2 py-10 flex-wrap justify-center'>
      <Card/>
      </div>
    </div>
 
   
  )
}

export default App