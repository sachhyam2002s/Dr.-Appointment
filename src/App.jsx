import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home  from './components/Home'
import About  from './components/About'
import Contact  from './components/Contact'
import Footer from './components/Footer'
// import { Contact } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar title='Physiotherapy'/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={ <About/>} />
      <Route path='/contact' element={ <Contact/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
