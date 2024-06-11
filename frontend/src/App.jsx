import { useState } from 'react'
import Navbar from './components/Navbar'
import Coverpage from './components/Coverpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Coverpage />

    </>
  )
}

export default App
