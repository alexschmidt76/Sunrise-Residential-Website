import './App.css'

import Home from './assets/components/Home.jsx';
import About from './assets/components/About.jsx';

import { BrowserRouter as Router, Routers, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
