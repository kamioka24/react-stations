// DO NOT DELETE

import React, { useState, Component } from "react";
import './App.css'

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1936.jpg");

  const updataImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((data) => {
      const status = data.status;
      if (status === "success") {
        const updataDogUrl = data.message;
        setDogUrl(updataDogUrl)
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
      <header>React_Station2</header>
      <p>犬の画像です</p>
      <img src={dogUrl} />

      <button onClick ={() => setDogUrl(updataImage())} />
    </div>
  )
}
