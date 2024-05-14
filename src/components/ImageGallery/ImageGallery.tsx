import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Photo } from "../../services/api";

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (photo: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal }) => {
  return (
    <ul className={css.imageList}>
      {Array.isArray(photos) &&
        photos.map((photo) => {
          return (
            <li key={photo.id} className={css.imageItem}>
              <ImageCard photo={photo} openModal={openModal} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
