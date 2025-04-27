import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('default')
  const nameRef = useRef()

  const fetchData = async(name) => {
    try {
      const res = await fetch(`https://deploy-server-nuoe.onrender.com/api/${name}`)
      const data = await res.json()
      if (data){
        console.log(data)
        return data
      }
    } catch (error) {
      console.log(error)
    }
     
  }

  const handleSubmit = async() => {
    const userName = nameRef.current.value
    if (userName){
      const data = await fetchData(userName)
      if (data){
        setMsg(data.message)
      }
    }
  }

  return (
    <>
      <h1>welcome!</h1>
      <input type="text" ref={nameRef}/>
      <button onClick={handleSubmit}>say hello to user</button>
      <h4>{msg}</h4>
    </>
  )
}

export default App
