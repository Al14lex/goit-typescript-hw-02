import { useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)' // Прозоро темно-сірий фон
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '40%', 
    height: '80%', 
    overflow: 'hidden' 
    },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClose]);

  return (
      <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          style={customStyles}
        >
      <img src={imageUrl} alt="Large version of the image" />
    </Modal>
  );
};

export default ImageModal;
