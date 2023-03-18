import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NoteState from './context/NoteState'
import Note from './components/Note';
import Addnote from './components/Addnote';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import Spinner from './components/Spinner'

function App() {

  const [alert , setAlert] = useState(null);
  const displayAlert = (heading, msg)=>{
    setAlert(
      { heading: heading,  msg: msg}
    );
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>
    <NoteState>
    <Router>

      <Navbar/>
      
      {alert && <Alert alert={alert} />}
      {/* <h1>Utkarsh Yadav</h1> */}
      <Spinner />
      <Routes>
        <Route exact  path="/"  element={<Main displayAlert={displayAlert} />} />
        <Route exact  path="/addnote"  element={<Addnote displayAlert={displayAlert} />} />  
        <Route exact  path="/note"  element={<Note/>} />  
        <Route exact  path="/about"  element={<About/>} />  
        <Route exact  path="/login"  element={<Login displayAlert={displayAlert}  />}  />  
        <Route exact  path="/signup"  element={<Signup displayAlert={displayAlert}  />} />  
      </Routes>

      </Router>
      </NoteState>
    </>
  );
}

export default App;
