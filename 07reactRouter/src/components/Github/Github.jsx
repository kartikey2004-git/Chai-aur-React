// import React from 'react'

// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github(){
  const data = useLoaderData()
  // const [data , setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/kartikey2004-git')
  //   .then(response => response.json())
  //   .then(data =>{
  //     console.log(data);
  //     setData(data)
  //   })
  // },[])



  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
    <img src={data.avatar_url} alt="" width = {300}></img>
    </div>
  )
}

export default Github



export const githubInfoLoader = async ()=> {
  const response = await fetch('https://api.github.com/users/kartikey2004-git')
  return response.json()
}
