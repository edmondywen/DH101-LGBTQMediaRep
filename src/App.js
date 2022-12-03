import './App.css';
import Landing from './pages/Landing';
import Analysis from './pages/Analysis';
import Narrative from './pages/Narrative';
import About from './pages/About';
import Bibliography from './pages/Bibliography';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/narrative" element={<Narrative/>}></Route>
            <Route path="/analysis" element={<Analysis/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/bibliography" element={<Bibliography/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
