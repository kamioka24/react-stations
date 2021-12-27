import * as React from 'react'
import DogImage from './DogImage.js';

function Description(props) {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1936.jpg");
  const updateImg = () => {
    fetch("https://dog.ceo/api//breeds/image/random")
    .then(response => response.json())
    .then(data => setDogUrl(data.message));
  }
  return(
    <div>
      <span className="item">
        {props.desc}
      </span>
      <DogImage dogUrl={dogUrl} />
      <button onClick={updateImg} className="btn">
        更新する
      </button>
    </div>
  )
}

export default Description;
