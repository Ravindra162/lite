import React, { useState, useRef } from 'react';
import axios from 'axios';
import cloud from '../assets/cloud_upload.jpg';

const Image = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  

  const uploadImage = async () => {
    try {
      if (!selectedFile) {
        console.error('No file selected');
        return;
      }

      // Check if the selected file is either JPEG or PNG
      if (!selectedFile.type.includes('jpeg') && !selectedFile.type.includes('png')) {
        console.error('Unsupported file format. Please select a JPEG or PNG file.');
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedFile);
      console.log(formData)

      // Make a POST request to your backend API with the formData
      const response = await axios.post('http://localhost:5000/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
        }
      });

      console.log('Server response:', response);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className='h-[90%] w-full  flex flex-col justify-center items-center'>
      <div
        className='h-2/3 w-1/3 bg-white rounded-xl  flex flex-col justify-center items-center cursor-pointer'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        <img className='h-1/3 w-1/3 border-2 border-dashed border-slate-300 rounded-md' src={cloud} alt='Image' />
        <h3 className='text-black font-bold mt-5'>Click or Drag and drop</h3>
      </div>
      <input
        type='file'
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept='image/*'
      />
      <button onClick={uploadImage}>Upload Image</button>
      <div className='imageView flex gap-5 mt-3' id='imageView'>
        {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt={`Selected Image`} className='h-32 w-32' />}
      </div>
    </div>
  );
};

export default Image;
