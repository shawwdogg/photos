import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import shortenString from "./utils/shortenString";

const App = () => {
  const [photos, setPhoto] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/albums/1/photos";
  useEffect(() => {
    async function getPhotos() {
      const result = await fetch(apiUrl);
      const data = await result.json();
      setPhoto(data);
    }
    getPhotos();
  }, []);
  // console.log(photos);

  
  // let output = shortenString("xskxnnosdemwkefmwfcwkcekmcpwmpcm");
  // console.log(output);

  return (
    <div className="app">
      <h1 className="app__title">Photo Gallery Json</h1>
      <div className="photo__container">
        {photos?.map((photo) => (
          <div key={photo.id} className="photo__wrapper">
            <p className="photo__title">{shortenString(photo.title)}</p>
            <img className="photo__img" src={photo.thumbnailUrl} alt="json" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
