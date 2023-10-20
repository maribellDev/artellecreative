import { useState } from 'react';
import Image from "next/image";
import img1 from '../../public/CT-1.jpg';
import img2 from '../../public/CT-2.jpg';
import img3 from '../../public/CT-3.jpg';
import img4 from '../../public/CT-4.jpg';

export function Gallery1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [img1, img2, img3, img4]; // Используйте импортированные изображения

  const openImage = (index) => {
    setSelectedImage(images[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} onClick={() => openImage(index)}>
            <Image
              src={image}
              alt={`Image ${index}`}
            
             
            />

          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeImage}>
         <div className="close">&#10006;</div> 
          <Image
          className="image_full"
            src={selectedImage}
            alt="Selected Image"
            layout="fill"
            objectFit="contain"
           
          />
        </div>
        )  }

      <style jsx>
        {`
          .gallery {
            max-width: 1280px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 26px;
          }

          .gallery div {
            cursor: pointer;
          }

          .modal {
            position: fixed;
            padding: 20px;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
           
          }
          
          .modal .close{
            position: absolute;
            top: 30px;
            right: 30px;
            margin: 20px;
            font-size: 28px;
            cursor: pointer;
            padding 10px;
            color:white;
          }
          .modal .image_full{
            margin:20px;
          }
          
        `}
      </style>
    </div>
  );
}