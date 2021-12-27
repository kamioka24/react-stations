import * as React from 'react'
import { userState} from 'react';

function DogImage(props) {
  const [url, setDogUrl] = userState(props.url);
  const handleClick = () => {
    fetch("https://dog.ceo/api//breeds/image/random")
    .then(response => response.json())
    .then(data => setDogUrl(data.message));
  }
  return(
    <span CalssName="item">
      <img src={url} />
      <button className="btn" onClick={handleClick}>
        更新
      </button>
    </span>
  )
}

export default DogImage;
