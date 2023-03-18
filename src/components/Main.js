import React from 'react'
import '../style/main.css'
import Addnote from './Addnote'
import Note from './Note'


const Main = (props) => {
  const {displayAlert} = props;
  return (
    <>
    <Addnote displayAlert={displayAlert} />
    <Note />
    </>
  )
}

export default Main
