import React, {useContext, useState} from 'react'
import NoteContext from '../context/NoteContext'
import  '../style/addnote.css'

const Addnote = () => {
  const context = useContext(NoteContext);

  // const {addNote, editNote, deleteNote} = context;
  const {addNote} = context;

  const [note, setNote] = useState({title: "", description:"", tag:""});

  const handleClick = (e)=>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag)
    
  }

  const onChanges = (e)=>{
    setNote({...note,   [e.target.name]:  e.target.value})
  }

  return (
    <div>
      <div id="addNoteBox">
      <h2>Add Your Notes</h2>
      <form id="addNoteFrom" >

        <div className="fromElement">
          <label htmlFor="title">Enter your titile</label>
          <input type="text" name="title" id="title" onChange={onChanges}  />
        </div>

        <div className="fromElement">
          <label htmlFor="description">Enter your description</label>
          <input type="text" name="description" id="description" onChange={onChanges} />
        </div>
        
        <div className="fromElement">
          <label htmlFor="tag">Enter your tag name</label>
          <input type="text" name="tag" id="tag" onChange={onChanges}  />
        </div>

        <div className="fromBtn">
          <button type="submit" onClick={handleClick}>Add</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Addnote
