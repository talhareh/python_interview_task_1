
import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', image);

    axios.post('/api/upload/', formData)
      .then(response => {
        setImageUrl(response.data.url);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" accept=".jpg, .jpeg"  onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}

export default ImageUpload;
