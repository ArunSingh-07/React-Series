import { useState } from 'react'

import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwindCSS</h1>
     <Cards/>
    </>
  )
}

export default App
