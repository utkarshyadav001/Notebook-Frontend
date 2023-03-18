// import React, { useState} from 'react'
// // import NoteContext from '../context/NoteContext'
// import  '../style/editnote.css'

// const Editnote = (props) => {
//   // const context = useContext(NoteContext);
//   console.log("good", props)
  
//   const {title, description, tag} = props.note
//   // console.log(title, description, tag);

//   // const {addNote, editNote, deleteNote} = context;
//   const [note, setNote] = useState({etitle: "", edescription: "", etag: ""});
  
//   setNote({title: note.etitle, description: note.edescription, tag: note.etag})

// //   console.log(props)

//   const handleClick = (e)=>{
//     e.preventDefault();
    
    
//   }

//   const onChanges = (e)=>{
//     setNote({...note,   [e.target.name]:  e.target.value})
//   }

//   return (
//     <div>
//       <div id="editNoteBox">
//       <h2>Edit Your Notes</h2>
//       <form id="editNoteFrom" >

//         <div className="efromElement">
//           <label htmlFor="etitle">Edit your titile</label>
//           <input type="text" name="etitle" value={title} id="etitle" onChange={onChanges}  />
//         </div>

//         <div className="efromElement">
//           <label htmlFor="edescription">Edit your description</label>
//           <input type="text" name="edescription" value={description} id="edescription" onChange={onChanges} />
//         </div>
        
//         <div className="efromElement">
//           <label htmlFor="etag">Edit your tag name</label>
//           <input type="text" name="etag" value={tag} id="etag" onChange={onChanges}  />
//         </div>

//         <div className="efromBtn">
//           <button type="submit" onClick={handleClick}>Edit</button>
//           <button type="reset">Reset</button>
//         </div>
//       </form>
//           <button onClick={()=>{document.getElementById("updateNoteBox").style.display = "none"}}>Close</button>
//     </div>
//     </div>
//   )
// }

export default Editnote

import React from 'react'

const Editnote = () => {
  return (
    <div>
      nothing
    </div>
  )
}

export default Editnote
