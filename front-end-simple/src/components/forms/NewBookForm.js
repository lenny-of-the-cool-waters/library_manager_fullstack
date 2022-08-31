import React, { useState } from "react";

const NewBookForm = ({ handleClose }) => {
  const [title, setTitle] = useState();
  const [series, setSeries] = useState();
  const [author, setAuthor] = useState();
  const [pages, setPages] = useState();
  const [status, setStatus] = useState("unread");

  return (
    <div>
      <form id="book-form">
        <div className="form-row align-items-center mb-3">
          <div className="col-3">
            <label for="title">Title</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              id="form-title"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-3">
            <label for="series">Series</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              id="form-series"
              placeholder="Book Series"
              value={series}
              onChange={(e) => setSeries(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-3">
            <label for="author">Author</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              id="form-author"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-3">
            <label for="pages">Pages</label>
          </div>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              id="form-pages"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row align-items-center mb-3">
          <div className="col-3">
            <label for="status">Status</label>
          </div>
          <div className="col-8">
            <select
              id="form-status"
              className="form-control"
              onChange={(e) => setStatus(e.target.value)}
              defaultValue={status}
            >
              <option value="read">read</option>
              <option value="reading">reading</option>
              <option value="unread">unread</option>
            </select>
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="col-3 ml-auto">
            <input className="btn btn-success" type="submit" value="Submit" />
          </div>
          <div className="col-3">
            <button
              className="btn btn-danger cancel-form-modal"
              type="button"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewBookForm;
