import * as React from 'react';

function DogImage(props) {
  return(
    <div>
      <img src={props.url} />
    </div>
  )
}

export default DogImage;
