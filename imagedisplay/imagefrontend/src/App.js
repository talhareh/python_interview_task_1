import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);

    axios.post('http://localhost:8000/upload/', formData)
      .then((response) => {
        console.log(response.data);
        fetchImages();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchImages = () => {
    axios.get('http://localhost:8000/list/')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="text" placeholder="Title" onChange={handleTitleChange} />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>

      <h2>Image List</h2>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={`http://localhost:8000${image.url}`} alt={image.title} />
            <p>{image.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
