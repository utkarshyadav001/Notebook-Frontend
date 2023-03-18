import React, {useContext, useState} from 'react'
import NoteContext from '../context/NoteContext'
import  '../style/addnote.css'

const Addnote = (props) => {
  if(!localStorage.getItem("authToken")){
    window.location.href = "/login"
  }

  const context = useContext(NoteContext);
  const {addNote} = context;
  
  // const {addNote, editNote, deleteNote} = context;
  
  const {displayAlert} = props;
  const [note, setNote] = useState({title: "", description:"", tag:""});

  
  const handleResetClick = ()=>{
    setNote({id: "", title: "", description: "", tag: ""});
    displayAlert("success", "add note form reset sucessfully");
  }

  const handleClick = async (e)=>{
    e.preventDefault();
    // console.log(note.title, note.description, note.tag);
    // console.log(JSON.stringify(note.title, note.description, note.tag));
    // console.log(localStorage.getItem("authToken"))
    if(localStorage.getItem("authToken")){
      await addNote(note.title, note.description, note.tag);
      setNote({id: "", title: "", description: "", tag: ""}); 
    }
    else{
      displayAlert("error", "Some things wates worng..");
    }
  }

  const onChanges = (e)=>{
    setNote({...note,   [e.target.name]:  e.target.value});
  }

  return (
    <div>
      <div id="addNoteBox">
      <h2>Add Your Notes</h2>
      <form id="addNoteFrom" >

        <div className="fromElement">
          <label htmlFor="title">Enter your titile</label>
          <input type="text" name="title" id="title" onChange={onChanges}  minLength={5} value={note.title} placeholder="Enter Your Title" required/>
        </div>

        <div className="fromElement">
          <label htmlFor="description">Enter your description</label>
          <input type="text" name="description" id="description" onChange={onChanges} value={note.description} placeholder="Enter Your Description" minLength={5} required/>
        </div>
        
        <div className="fromElement">
          <label htmlFor="tag">Enter your tag name</label>
          <input type="text" name="tag" id="tag" onChange={onChanges} value={note.tag} placeholder="Enter Your Tag" />
        </div>

        <div className="fromBtn">
          <button type="submit" disabled={note.title.length<5 || note.description.length<5} onClick={handleClick}>Add</button>
          <button type="reset" onClick={handleResetClick} >Reset</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Addnote
