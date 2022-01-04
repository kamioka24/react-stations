import React from "react"

export const BreedsSelect = (props) => {
  const breeds = props.breeds;

  const listItems = breeds.map((breed) => {
    <option key={breed} breed={breed} text={breed}>{breed}</option>
  })
  return(
    <select breed={props.breed} onChange={props.change}>
      <option value="none">犬種を選択</option>
      {listItems}
    </select>
  )
}
