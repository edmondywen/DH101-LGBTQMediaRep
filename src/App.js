import './App.css';
import ScrollToTop from './components/ScrollToTop.js';
import Landing from './pages/Landing';
import Narrative from './pages/Narrative';
import About from './pages/About';
import Bibliography from './pages/Bibliography';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DataCritique from './pages/DataCritique';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/narrative" element={<Narrative/>}></Route>
            <Route path="/critique" element={<DataCritique/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/bibliography" element={<Bibliography/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
