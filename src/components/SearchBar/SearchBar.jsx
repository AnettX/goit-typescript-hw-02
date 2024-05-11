import css from "./SearchBar.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

const FORM_INITIAL_VALUES = {
  searchTerm: "",
};

const SearchBar = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    if (!values.searchTerm.trim()) {
      toast.error("Please, enter your query", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
      });
      return;
    }

    onSetSearchQuery(values.searchTerm);
  };

  return (
    <header>
      <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <h2 className={css.title}>Image Search</h2>
          <div className="searchBtnContainer">
            <label>
              <Field
                type="text"
                name="searchTerm"
                placeholder="Enter search query..."
                className={css.searchInput}
              />
            </label>
            <button type="submit" className={css.btnSubmit}>
              Search
            </button>
          </div>
        </Form>
      </Formik>
      <Toaster position="top-left" />
    </header>
  );
};

export default SearchBar;
