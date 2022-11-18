import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Analysis from './pages/Analysis';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/analysis" element={<Analysis/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
