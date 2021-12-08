import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/listen' element={<Home/>} />
          <Route path='/extra' element={<Home/>} />
          <Route path='/art' element={<Home/>} />
          <Route path='/publish' element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </ThemeProvider>
  );
}

export default App;
