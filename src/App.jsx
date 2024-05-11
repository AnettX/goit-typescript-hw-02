import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { requestPhotoesByQuery } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchPhotosByQuery() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await requestPhotoesByQuery(query, page);
        setPhotos((prevPhotos) => {
          if (Array.isArray(prevPhotos)) {
            return [...prevPhotos, ...data.results];
          } else {
            return [...data.results];
          }
        });
        setTotalPages(data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotosByQuery();
  }, [query, page]);

  const onSetSearchQuery = (newQuery) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPhotos(null);
      setPage(1);
      setTotalPages(0);
    }
  };

  const loadMorePhotos = () => {
    setPage(page + 1);
  };

  const openModal = (photo) => {
    setModalData(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return (
    <div className="container">
      <SearchBar onSetSearchQuery={onSetSearchQuery} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      {photos && <ImageGallery photos={photos} openModal={openModal} />}
      {isOpen && (
        <ImageModal isOpen={isOpen} closeModal={closeModal} photo={modalData} />
      )}
      {totalPages > page && <LoadMoreBtn loadMorePhotos={loadMorePhotos} />}
    </div>
  );
}

export default App;
