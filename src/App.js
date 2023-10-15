import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HankoAuth from './components/HankoAuth';
import HankoProfile from './components/HankoProfile';
import Dashboard from "./dashboard"
import Api from './Api';

function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path='/api' element={<Api />} />
        </Routes>
        <Routes>
          <Route path='/login' element={<HankoAuth/>} />
        </Routes>
        <Routes>
          <Route path='/profile' element={<HankoProfile/>} />
        </Routes>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
