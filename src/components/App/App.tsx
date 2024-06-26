import { useState, useEffect, FC } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { getImg, Photo } from "../../images-api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function App () {
  const [images, setImages] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 
 
  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    async function fetchImgs() {
      try {
        setLoading(true);
        setError(null);
        const data = await getImg(searchQuery, page);
         setImages(prevImages => [...prevImages, ...data]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchImgs();
  },  [page, searchQuery]);
   
  const handleSearch = async (input: string) => {
    setSearchQuery(input);
    setPage(1);
    setImages([]);
  } 
  const handleLoadMore = async () => {
    setPage(page + 1);
  };
  const handleImageClick = (imageUrl: string) => {
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

  