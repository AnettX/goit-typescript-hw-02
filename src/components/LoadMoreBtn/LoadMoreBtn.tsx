import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  loadMorePhotos: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMorePhotos }) => {
  return (
    <div className={css.containerBtn}>
      <button className={css.btn} type="button" onClick={loadMorePhotos}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
