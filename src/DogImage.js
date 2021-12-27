import * as React from 'react'
import { useState} from 'react';

function DogImage(props) {
  return(
    <div>
      <img src={props.dogUrl} />
    </div>
  )
}

export default DogImage;
