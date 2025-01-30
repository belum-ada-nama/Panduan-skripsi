
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Footer from './components/Footer';
import LeaderboardPage from './pages/LeaderboardPage';


function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
