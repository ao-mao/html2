import "./App.css";
import { Home, Login, Admin } from './pages'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login />}/> 
        <Route path="/home" element={<Home/>}/>
        <Route path="/Admin" element={<Admin />} />
        </Routes>
        
          
     
    </div>
  );
}

export default App;
