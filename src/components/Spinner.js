import React, {useContext} from 'react'
import loadingSpinner from '../img/loadingSpinner.gif'
import NoteContext from '../context/NoteContext';

const Spinner = (props) => {

  const contexts = useContext(NoteContext);
  const {loading} = contexts;
  console.log(loading)

  return (
    <>
      {loading && <div id="LoadingCom" style={{ "position": "fixed" }}>
        <div style={{ "width": "100vw", "height": "100vh", "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
          <img style={{ "border": "1px solid gray", "borderRadius": "10px" }} src={loadingSpinner} alt="Loading Spinner" />
        </div>
      </div>}
    </>
  )
}

export default Spinner

