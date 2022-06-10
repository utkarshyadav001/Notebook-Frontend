import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{

    let U1 = {
        "name": "Ankur Yadav",
        "age": 19
    }
    const [state, setState] = useState(U1)

    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Utkarsh Yadav",
                "age": 18
            })
        }, 1000);
    }
    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;