import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { Photo, requestPhotoesByQuery } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import React from "react";

function App(): JSX.Element {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Photo | null>(null);

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

  const onSetSearchQuery = (newQuery: string): void => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPhotos(null);
      setPage(1);
      setTotalPages(0);
    }
  };

  const loadMorePhotos = (): void => {
    setPage(page + 1);
  };

  const openModal = (photo: React.SetStateAction<Photo | null>): void => {
    setModalData(photo);
    setIsOpen(true);
  };

  const closeModal = (): void => {
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
        <ImageModal
          isOpen={isOpen}
          closeModal={closeModal}
          photo={modalData !== null ? modalData : null}
        />
      )}
      {totalPages > page && <LoadMoreBtn loadMorePhotos={loadMorePhotos} />}
    </div>
  );
}

export default App;
