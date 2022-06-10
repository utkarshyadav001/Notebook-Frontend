import { React, useContext, useEffect } from 'react'
import NoteContext from '../context/NoteContext'
import '../style/about.css'

const About = () => {
  const a = useContext(NoteContext);
  useEffect(( )=>{
    a.update();
    // eslint-disable-next-line
  }, [])
  return (
    <div>
        <h1>This is about page created by {a.state.name} he is {a.state.age} years old.</h1>
    </div>
  )
}

export default About
