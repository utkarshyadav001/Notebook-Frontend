import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

  const [loading, setLoading] = useState(true);

  const updateLoading = ()=>{
    loading ? setLoading(false) : setLoading(true);  
  } 

  const host = 'http://localhost:5000'

  const noteIntd = []

  const [notes, setNotes] = useState(noteIntd);


  // GET All notes
  const getNotes = async () => {
    // API CALL 
    try {
      let response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken')
        },
      });
      const json = await response.json()
      // await console.log(json);
      await setNotes(json);
      updateLoading()
    } catch (error) {
      console.log(error);

    }

  }




  // Add a note 
  const addNote = async (title, description, tag) => {
    // API CALL 

    try {
    updateLoading()
      // console.log(title, description, tag)
      let response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken')
        },
        body: JSON.stringify({ title, description, tag })
      });

      // console.log("adding a new note");
      const note = await response.json()
      // await console.log(json);
      setNotes(notes.concat(note));
      updateLoading()
    } catch (error) {
      console.log(error);

    }

  }



  //  Edit a note
  const editNote = async (id, title, description, tag) => {
    // API CALL 
    try {
      updateLoading()
      // console.log(id, title, description, tag);
      let response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken')
        },
        body: JSON.stringify({ title, description, tag })
      });
      const json = await response.json()
      await console.log(json);

      // Logic to edit in client 
      let newNotes = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        };
      }
      setNotes(newNotes);
      updateLoading()

    } catch (error) {
      // console.log(error);
    }

  }

  // Delete a note 
  const deleteNote = async (id) => {

    // API CALL 
    try {
      updateLoading()
      let response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken')
        },
      });
      const json = await response.json()
      await console.log(json);
      updateLoading()

    } catch (error) {
      console.log(error);

    }

    const newNote = notes.filter((note) => { return note._id !== id });
    setNotes(newNote);
    // console.log(id, "is founded");
  };


  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes, loading, updateLoading }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;