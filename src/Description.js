import * as React from 'react'
import { DogImage } from './DogImage.js';

export function Description(props) {
  const [url, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1936.jpg");
  const updateImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => setDogUrl(data.message));
  }
  return(
    <div>
      <hi>{props.desc}</hi>
      <DogImage url={url} />
      <button onClick={updateImage}>更新</button>
    </div>
  )
}
