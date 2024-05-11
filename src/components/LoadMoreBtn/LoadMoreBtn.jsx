import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMorePhotos }) => {
  return (
    <div className={css.containerBtn}>
      <button className={css.btn} type="button" onClick={loadMorePhotos}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
