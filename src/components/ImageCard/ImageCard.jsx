import css from "./ImageCard.module.css";

const ImageCard = ({ photo, openModal }) => {
  const onClick = () => {
    openModal({
      src: photo.urls.regular,
      alt: photo.alt_description,
    });
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
