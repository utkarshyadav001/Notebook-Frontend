import React, {useContext} from 'react'
import NoteContext from '../context/NoteContext'
import Noteitem from './Noteitem'
import '../style/note.css'

const Note = () => {
  const context = useContext(NoteContext);
  // eslint-disable-next-line
  const {notes, setNotes} = context;


  return (
    <div id="note">

      <h1>Your important Notes here!</h1>
      
      <div id="noteItemContainer">
      {notes.map((notes)=>{return <Noteitem key={notes._id} note={notes}/> })}
      </div>
      
    </div>
  )
}

export default Note
