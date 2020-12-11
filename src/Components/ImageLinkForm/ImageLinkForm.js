import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='pfont_size'>
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className='center'>
        <div className='form center'>
          <input
            className='image_input center'
            type='text'
            onChange={onInputChange}
          />
          <button className='button_styles' onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
