import React, { useState } from "react";
import './App.css'
import './Header.js'
import './Description.js'

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1936.jpg");

  const updateImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((data) => {
      const status = data.status;
      if (status === "success") {
        const updateDogUrl = data.message;
        setDogUrl(updateDogUrl)
      }
    },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  };

  return (
    <div>
      <header className="header">React_Station2</header>
      <p>犬の画像です</p>
      <img src={dogUrl} />
      <button onClick={updateImage}>更新</button>
    </div>
  )
}
