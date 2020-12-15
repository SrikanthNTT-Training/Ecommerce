
import './App.css';
import Navbar from './components/NavBar'
import {BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
       <BrowserRouter>
       <div className="App">
       <Navbar />
      </div>
       </BrowserRouter>
      
  
  );
}

export default App;
