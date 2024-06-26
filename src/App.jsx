import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { getImg } from "./images-api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from 'react-modal';

Modal.setAppElement('#root');


export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
   const [selectedImage, setSelectedImage] = useState(null); 
 
  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    async function fetchImgs() {
      try {
        setLoading(true);
        setError(false);
        const data = await getImg(searchQuery, page);
         setImages(prevImages => [...prevImages, ...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchImgs();
  },  [page, searchQuery]);
  
    
  const handleSearch = async (input) => {
    setSearchQuery(input);
    setPage(1);
    setImages([]);
  }
   
  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); 
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  }
    return (
      <>
        <SearchBar onSubmit={handleSearch} />
        {images.length > 0 && <ImageGallery items={images} onImageClick={handleImageClick}/>}

        <Loader loading={loading} />
        {error && <p>Error: {error}</p>}

        {images.length > 0 && !loading &&
        <LoadMoreBtn onClick={handleLoadMore} />}

         {selectedImage && (
        <ImageModal
          isOpen={true}
          onClose={handleCloseModal}
          imageUrl={selectedImage}
        />
      )}
      </>
    );
  }

  