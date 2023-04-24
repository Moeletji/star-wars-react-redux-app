import './App.css';
import Films from './components/Films';
import Film from './components/Film';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';


function App() {
  return (
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/star-wars-react-redux-app" element={<Films />} />
            <Route path="/star-wars-react-redux-app/film/:name" element={<Film />} />
            <Route path="/star-wars-react-redux-app/404" element={<ErrorPage errorCode={404} />} />
            <Route path="star-wars-react-redux-app/500" element={<ErrorPage errorCode={500} />} />
            <Route path="*" element={<ErrorPage errorCode={404} />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
