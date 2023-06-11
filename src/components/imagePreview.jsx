
import React from 'react';
import './imagePreview.css';

export default function ImagePreview() {
  return(
    <div className="image-root">
      <img className='master' src="../assets/images/master.png" alt="" />
      <div className="background-img"></div>
    </div>
  );
}