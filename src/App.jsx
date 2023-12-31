import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import Download from './pages/download/Download'
import NotFound from './pages/notFound/NotFound'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='about' element = {<About/>}/>
        <Route path='services' element = {<Services/>}/>
        <Route path='contact' element = {<Contact/>}/>
        <Route path='download' element = {<Download/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App