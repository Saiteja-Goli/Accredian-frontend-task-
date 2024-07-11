import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'
import Container1 from './components/Container1'
import Navbar from './components/Navbar'
import Refer from './components/Refer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container1/>
    <Navbar/>
    <Refer/>
    </>
  )
}

export default App
