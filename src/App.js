import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Nav from './Nav'
import './App.css';
import Home from './Home';
import Testimonial from './Testimonial';
// import MyFooter from './MyFooter';
import Service from './Service';

function App() {
  return (
    <div className="App">
      <header className="App-header position-relative">
        <div className='fixed-top'><Nav /></div>
        <div><Home /></div>
        
      </header>
      <br /><br />
      <Service />
      <br /><br /><br /><br /><br />
      <Testimonial />

      <footer className='container py-5'>
        
        <Nav />
        <div className='row  justify-content-between'>
          <div className='col'>
            <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
          </div>
        
        <div className='col text-end'>
          <div className='my-4'><span>AA </span><span>AA </span><span>AA </span></div>
          <p>Copyright, All Rights, Reserved, 2017</p>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
