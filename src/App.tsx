import './App.css';
import logo from './logo.png'
import Films from './components/Films';
import Film from './components/Film';
import { BrowserRouter as Router, Route, Routes, useNavigate  } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
      <Router>
        <div className="container">
          <img 
            src={logo}
            alt="Star Wars"
            style={{ width: 300, display: 'block', margin: 'auto'}}
          />
          <Routes>
            <Route path="/" element={<Films />} />
            <Route path="/film/:name" element={<Film />} />
            <Route path="/404" element={<ErrorPage errorCode={404} />} />
            <Route path="/500" element={<ErrorPage errorCode={500} />} />
            <Route path="*" element={<ErrorPage errorCode={404} />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
