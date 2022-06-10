import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NoteState from './context/NoteState'

function App() {
  return (
    <>
    <NoteState>
    <Router>

      <Navbar/>
      <h1>Utkarsh Yadav</h1>

      <Routes>
        <Route exact  path="/"  element={<Main/>} />
        <Route exact  path="/about"  element={<About/>} />  
      </Routes>

      </Router>
      </NoteState>
    </>
  );
}

export default App;
