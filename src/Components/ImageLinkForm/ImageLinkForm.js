import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
<<<<<<< HEAD
    <div className='App'>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input
            className='f4 pa2 w-70 center'
            type='text'
            onChange={onInputChange}
          />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >
=======
    <div className="App">
      <p className="f3">
        {'This Magic Brain will detect faces in your pictures. Give it a try'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>
>>>>>>> d11d317a0b5357729a94422d360f8a08e629c259
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default ImageLinkForm
=======
export default ImageLinkForm
>>>>>>> d11d317a0b5357729a94422d360f8a08e629c259
