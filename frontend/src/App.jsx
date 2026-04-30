import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './assets/components/Home.jsx';
import About from './assets/components/About.jsx';
import NavigationBar from './assets/components/NavigationBar.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  // State to track the current breakpoint, which can be 'sm', 'md', or 'lg'
  const [breakpoint, setBreakpoint] = useState('sm');

  // useEffect runs once on component mount to set up the resize event listener and determine the initial breakpoint
  useEffect(() => {
    // Function to check the current window width and update the breakpoint state
    const handleResize = () => {
      if (window.matchMedia("(min-width: 992px)").matches) {
        setBreakpoint('lg');
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setBreakpoint('md');
      } else {
        setBreakpoint('sm');
      }
    }
    
    // Initial check
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount 
    // (useEffect returns an optional cleanup function that runs when the component unmounts)
    return () => window.removeEventListener('resize', handleResize);
  
  }, []);

  // Pass the breakpoint state as a prop to the components that need it
  return (
    <div className='App'>
      <Router>
        <NavigationBar breakpoint />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/photos' element={<Photos/>} />
          <Route path='/pricing' element={<Pricing/>} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App;
