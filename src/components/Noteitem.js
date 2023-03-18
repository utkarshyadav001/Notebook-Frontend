import React, {useContext} from 'react'
import NoteContext from '../context/NoteContext'
import '../style/noteitem.css'
import  '../style/editnote.css'


const Noteitem = (props) => {

  if(!localStorage.getItem("authToken")){
    window.location.href = "/login"
  }
  
  const context = useContext(NoteContext);
  
  const {deleteNote} = context;

  const { note, updateNote } = props;


  return (
    <div id="noteitem">

        <h3>{note.title}</h3>
        <div id="icon">
          <button id="edit" onClick={()=>{updateNote(note)}} >Edit</button>
          <button id="delete" onClick={()=>{ deleteNote(note._id)}}>Delete</button>
        </div>
        <p>{note.description}</p>

    </div>
  )
}

export default Noteitem
