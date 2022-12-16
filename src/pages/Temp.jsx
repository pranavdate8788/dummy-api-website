import React, { useState } from "react";

const Temp = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const selectImages = (e) => {
    const images = e.target.files;
    const imagesArray = Array.from(images);
    const imageURL = imagesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages([...selectedImages , ...imageURL]);
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <input type="file" onChange={selectImages} multiple accept="image/*" />
      <div>
        {selectedImages.map((image) => {
          return (
            <div key={image}>
              <img src={image} width={200} />
              <button onClick={()=>{setSelectedImages(selectedImages.filter(img => img !== image))}}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Temp;
