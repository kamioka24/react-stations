import * as React from 'react'
import DogImage from './DogImage.js';

function Description(props) {
  return(
    <div className="wrap">
      <span className="item">
        {props.desc}
      </span>
      <DogImage url="https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1936.jpg" />
    </div>
  )
}

export default Description;
