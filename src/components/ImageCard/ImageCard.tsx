import React from "react";
import css from "./ImageCard.module.css";
import { Photo } from "../../services/api";

interface ImageCardProps {
  photo: Photo;
  openModal: (photo: Photo) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, openModal }) => {
  // const onClick = (): void => {
  //   openModal({
  //     src: photo.urls.regular,
  //     alt: photo.alt_description,
  //   });
  // };
  const onClick = (): void => {
    openModal(photo);
  };

  return (
    <img
      className={css.img}
      src={photo.urls.small}
      alt={photo.alt_description}
      onClick={() => openModal(photo)}
    />
  );
};

export default ImageCard;
