import React from "react"
import './App.css'
import Header from './Header.js'
import Description from './Description.js';

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  return (
    <div>
      <Header className="header">React_Station8</Header>
      <Description desc="犬の画像を表示させるサイトです。" />
      <p>犬の画像です</p>
      <img src={dogUrl} />
      <button onClick={updateImage}>更新</button>
    </div>
  )
}
