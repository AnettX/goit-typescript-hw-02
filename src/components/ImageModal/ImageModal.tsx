import React from "react";
import Modal from "react-modal";
import { Photo } from "../../services/api";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <img src={photo?.urls.regular} alt={photo?.alt_description} />
    </Modal>
  );
};

export default ImageModal;
