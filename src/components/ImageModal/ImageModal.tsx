import React from "react";
import { Photo } from "../../services/api";
import { Modal } from "react-bootstrap";

interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  photo: Photo | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  closeModal,
  photo,
}) => {
  return (
    <Modal show={isOpen} onHide={closeModal} contentLabel="Image Modal">
      <img src={photo?.urls.regular} alt={photo?.alt_description} />
    </Modal>
  );
};

export default ImageModal;
