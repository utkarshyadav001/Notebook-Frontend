import React, { useContext, useEffect, useState, useRef } from 'react'
import NoteContext from '../context/NoteContext'
import Noteitem from './Noteitem'
// import {useHistory} from 'react'
// import Editnote from './Editnote'
import '../style/note.css'

const Note = () => {

  if(!localStorage.getItem("authToken")){
    window.location.href = "/login"
  }

  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  // eslint-disable-next-line
  // console.log("good", props);

  // const history = useHistory()
  // if(localStorage.getItem("authToken")){
  //   history.push('/login')
  // }

  // let note = {title: "", description: "", tag: ""}
  // console.log(title,description ,tag);



  // const {addNote, editNote, deleteNote} = context;
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
  const [updateNotesBox, setUpdateNoteBox] = useState(false);

  const displayUpdateNotesBox = ()=>{
    updateNotesBox ? setUpdateNoteBox(false) : setUpdateNoteBox(true);  
  } 

  const userefClose = useRef(null)


  const handleClick = (e) => {
    e.preventDefault();
    // console.log("handle",note.id , note.etitle, note.edescription, note.etag);
    // console.log(note.id, note.etitle, note.edescription, note.etag);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    displayUpdateNotesBox();
    // userefClose.current.click()
  }

  const handleResetClick = () => {
    setNote({ id: note.id, etitle: "", edescription: "", etag: "" });
  }

  const handleCloseClick = () => { displayUpdateNotesBox() }

  const onChanges = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }


  const updateNote = (currentNote) => {
    displayUpdateNotesBox();
    // console.log(currentNote);
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })

    // setNote(currentNote);

  }
  
  useEffect(() => {
    if(localStorage.getItem("authToken")){
    getNotes()
    }
    else{
      document.getElementById("noteItemContainer").innerHTML= `<h3> Please Login/Signup to add notes on could</h3>`
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div id="note">

        { updateNotesBox && <div style={{ "display": "none" }} id="updateNoteBox">
          <div id="editNoteBox">
            <h2>Edit Your Notes</h2>
            <form id="editNoteFrom" >

              <div className="efromElement">
                <label htmlFor="etitle">Edit your titile</label>
                <input type="text" name="etitle" value={note.etitle} id="etitle" onChange={onChanges} minLength={5} required placeholder="Enter Your Title" />
              </div>

              <div className="efromElement">
                <label htmlFor="edescription">Edit your description</label>
                <input type="text" name="edescription" value={note.edescription} id="edescription" onChange={onChanges} minLength={5} required placeholder="Enter Your Description" />
              </div>

              <div className="efromElement">
                <label htmlFor="etag">Edit your tag name</label>
                <input type="text" name="etag" value={note.etag} id="etag" onChange={onChanges} placeholder="Enter Your Tag" />
              </div>

              <div className="efromBtn">
                <button type="submit" disabled={note.etitle.length < 5 || note.edescription.length < 5} useref={userefClose} onClick={handleClick}>Edit</button>
                <button type="reset" onClick={handleResetClick}>Reset</button>
              </div>
            </form>
            <button id="editformclosebtn" onClick={handleCloseClick}>Close</button>
          </div>
        </div>}

        <h1>Your important Notes here!</h1>
        <div id="noteItemContainer">
{/* {console.log(notes)} */}
          {/* { !notes.length ? <> {notes.map((notes) => { return <Noteitem key={notes._id} updateNote={updateNote} note={notes} /> })}</> : <h3> Add Some Notes on could  </h3>} */}
          <> {notes.map((notes) => { return <Noteitem key={notes._id} updateNote={updateNote} note={notes} /> })}</>
        </div>

      </div>
    </>

  )
}

export default Note
