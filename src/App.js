import './App.scss';
import { Routes, Route, redirect as Redirect } from 'react-router-dom'
import Layout from './components/Layout' 
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

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
        </Route>
      </Routes>
    </>
  )
}

export default App;
