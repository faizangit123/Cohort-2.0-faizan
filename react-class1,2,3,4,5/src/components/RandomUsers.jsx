import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const RandomUsers = () => {
const [Users, setUsers] = useState('')
const AllData = async ()=>{
  const response = await axios.get("https://randomuser.me/api/")
  setUsers((response.data.results[0].name.title)+" "+(response.data.results[0].name.first)+" "+(response.data.results[0].name.last))
}
useEffect(()=>{
  AllData
},[])

  return (
    <div>
    <h2>{Users}</h2>
    <button onClick={()=>{
      AllData()
    }}></button>
    </div>
  )
}

export default RandomUsers