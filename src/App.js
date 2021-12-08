import './App.css';
import { Home, Listen, Extra, Art, Publish, Navbar, Footer} from './components'
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
          <Route path='/evenings-kingdom/' element={<Home/>} />
          <Route path='/evenings-kingdom/listen' element={<Listen/>} />
          <Route path='/evenings-kingdom/extra' element={<Extra/>} />
          <Route path='/evenings-kingdom/art' element={<Art/>} />
          <Route path='/evenings-kingdom/publish' element={<Publish/>} />
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
