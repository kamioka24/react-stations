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
      <Header title="React_Station8" />
      <Description desc="犬の画像を表示させるサイトです。" />
    </div>
  )
}
