import React, {useContext} from 'react'
import NoteContext from '../context/NoteContext'
import '../style/noteitem.css'

const Noteitem = (props) => {
  
  const context = useContext(NoteContext);
  
  const {deleteNote} = context;

  const { note } = props;

  return (
    <div id="noteitem">
        <h3>{note.title}</h3>
        <div id="icon">
          <button id="edit">Edit</button>
          <button id="delete" onClick={()=>{ deleteNote(note._id)}}>Delete</button>
        </div>
        <p>{note.description}</p>

    </div>
  )
}

export default Noteitem
