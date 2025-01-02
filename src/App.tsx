
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UpdateForm from './pages/UpdateForm';

function App() {

  
  return (
    <Router>
    <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update-form" element={<UpdateForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
