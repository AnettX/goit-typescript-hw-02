import React from "react";
import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <p className={css.errorMsg}>
      Oops, something went wrong, please reload the page or try again later!
    </p>
  );
};

export default ErrorMessage;
