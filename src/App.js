// DO NOT DELETE

import React, { useState } from "react";
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1936.jpg");
  return (
    <div>
      <header>React_Station2</header>
      <p>犬の画像です</p>
      <img src={dogUrl} />

      <button onClick ={() => setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")} />
    </div>
  )
}
