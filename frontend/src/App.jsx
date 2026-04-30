//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './assets/components/Home.jsx';
import About from './assets/components/About.jsx';
import NavigationBar from './assets/components/NavigationBar.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Router>
        <NavigationBar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          {/* <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/photos' element={<Photos/>} />
          <Route path='/pricing' element={<Pricing/>} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App;
