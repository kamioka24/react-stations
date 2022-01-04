import React, { useEffect, useState } from "react"

export function DogListContainer() {
  const [breeds, setBreeds] = useState("xxx");
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
    <div />
  )
}
