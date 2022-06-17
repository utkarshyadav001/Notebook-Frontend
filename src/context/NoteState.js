import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{

    const noteIntd = [
        {
          "_id": "6299a48df6ef3aa45327c298",
          "user": "6298b3b69358a649f760343b",
          "title": "this is a title",
          "description": "this is description",
          "tag": "hacked",
          "date": "2022-06-03T06:05:01.992Z",
          "__v": 0
        },
        {
          "_id": "629d9275fe46b52a3d93e503",
          "user": "6298b3b69358a649f760343b",
          "title": "this note updated",
          "description": "updated sucessfully.",
          "tag": "updated",
          "date": "2022-06-06T05:36:53.642Z",
          "__v": 0
        },
        {
          "_id": "629f3665971e8566aa2979c2",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:28:37.858Z",
          "__v": 0
        },
        {
          "_id": "629f3710715692e6a37e2266",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:28.521Z",
          "__v": 0
        },
        {
          "_id": "629f3710715692e6a37e2268",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:28.777Z",
          "__v": 0
        },
        {
          "_id": "629f3710715692e6a37e226a",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:28.948Z",
          "__v": 0
        },
        {
          "_id": "629f3711715692e6a37e226c",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:29.121Z",
          "__v": 0
        },
        {
          "_id": "629f3711715692e6a37e226e",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:29.293Z",
          "__v": 0
        },
        {
          "_id": "629f3711715692e6a37e2270",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:29.454Z",
          "__v": 0
        },
        {
          "_id": "629f3711715692e6a37e2272",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:29.639Z",
          "__v": 0
        },
        {
          "_id": "629f3711715692e6a37e2274",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:29.807Z",
          "__v": 0
        },
        {
          "_id": "629f3711715692e6a37e2276",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:29.976Z",
          "__v": 0
        },
        {
          "_id": "629f3712715692e6a37e2278",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:30.165Z",
          "__v": 0
        },
        {
          "_id": "629f3712715692e6a37e227a",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:30.345Z",
          "__v": 0
        },
        {
          "_id": "629f3712715692e6a37e227c",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:30.676Z",
          "__v": 0
        },
        {
          "_id": "629f3712715692e6a37e227e",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:30.836Z",
          "__v": 0
        },
        {
          "_id": "629f3712715692e6a37e2280",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-07T11:31:30.994Z",
          "__v": 0
        },
        {
          "_id": "62a81da48057a55307854909",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-14T05:33:24.158Z",
          "__v": 0
        },
        {
          "_id": "62a81da58057a5530785490b",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-14T05:33:25.799Z",
          "__v": 0
        },
        {
          "_id": "62a81da68057a5530785490d",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-14T05:33:26.982Z",
          "__v": 0
        },
        {
          "_id": "62a81da88057a5530785490f",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-14T05:33:28.028Z",
          "__v": 0
        },
        {
          "_id": "62a81da98057a55307854911",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-14T05:33:29.002Z",
          "__v": 0
        },
        {
          "_id": "62a81da98057a55307854913",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-14T05:33:29.927Z",
          "__v": 0
        },
        {
          "_id": "62a81daa8057a55307854915",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-14T05:33:30.691Z",
          "__v": 0
        },
        {
          "_id": "62a81dab8057a55307854917",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-14T05:33:31.507Z",
          "__v": 0
        },
        {
          "_id": "62a81dac8057a55307854919",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it",
          "tag": "check updating",
          "date": "2022-06-14T05:33:32.362Z",
          "__v": 0
        },
        {
          "_id": "62a81dad8057a5530785491b",
          "user": "6298b3b69358a649f760343b",
          "title": "this note is not updated",
          "description": "Please update it Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque asperiores pariatur repellat eum commodi expedita, sunt facere sit provident ipsum, eos, unde ratione sit provident ipsum, eos, unde ratione voluptatibus dolorem libero doloribus soluta quaerat cupiditatesit provident ipsum, eos, unde ratione voluptatibus dolorem libero doloribus soluta quaerat cupiditatesit provident ipsum, eos, unde ratione voluptatibus dolorem libero doloribus soluta quaerat cupiditatesit provident ipsum, eos, unde ratione voluptatibus dolorem libero doloribus soluta quaerat cupiditatesit provident ipsum, eos, unde ratione voluptatibus dolorem libero doloribus soluta quaerat cupiditatesit provident ipsum, eos, unde ratione voluptatibus dolorem libero doloribus soluta quaerat cupiditatesit provident ipsum, eos, unde ratione voluptatibus dolorem libero doloribus soluta quaerat cupiditatesit provident ipsum, eos, unde ratione voluptatibus dolorem libero doloribus soluta quaerat cupiditatesit provident ipsum, eos, unde ratione voluptatibus dolorem libero doloribus soluta quaerat cupiditatevoluptatibus dolorem libero doloribus soluta quaerat cupiditate?",
          "tag": "check updating",
          "date": "2022-06-14T05:33:33.184Z",
          "__v": 0
        }
      ]

    const [notes, setNotes] = useState(noteIntd);

    // Add a note 
    const addNote = (title, description, tag)=>{
      // console.log("adding a new note");
      let note = {
        "_id": "6299a48df6ef3aa45327c29s8",
        "user": "6298b3b69358a649f760343sb",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-06-03T06:05:01.992Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }

    //  Edit a note
    const editNote = (id)=>{

    }

    // Delete a note 
    const deleteNote = (id)=>{

      const newNote = notes.filter((note)=>{ return note._id!==id});
      setNotes(newNote);
      console.log(id, "is founded");
    };
    
    
    return(
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;