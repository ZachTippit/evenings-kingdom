import './App.css';
import { Home, Listen, Extra, Art, Publish, Subscribe, Layout, Navbar, Footer} from './Components'
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
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path='listen' element={<Listen/>} />
            <Route path='extra' element={<Extra/>} />
            <Route path='art' element={<Art/>} />
            <Route path='publish' element={<Publish/>} />
            <Route path='subscribe' element={<Subscribe/>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;