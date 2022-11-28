import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout' 
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Ads from './components/Ads'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="hello" element={<Home />} />
          <Route path="PersonalWebsite" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ads" element={<Ads />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
