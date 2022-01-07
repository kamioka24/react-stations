import React, { useEffect, useState } from "react"
import { BreedsSelect } from './BreedsSelect.js';

export function DogListContainer() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  const handleChange = (e) => selectedBreed(e.target.value)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then((result) => {
        if(result.status === "success") {
          setBreeds(result.message);
        }
      });
  }, []);

  return(
    <BreedsSelect
    values={breeds}
    values={selectedBreed}
    changes={handleChange} />
  )
}
