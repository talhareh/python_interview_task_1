import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Make an API request to get the list of uploaded images
    axios.get('http://localhost:8000/images/')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div>
      <h1>Uploaded Images</h1>
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <img src={`http://localhost:8000${image.image}`} alt={image.title} />
            <p>{image.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageList;
