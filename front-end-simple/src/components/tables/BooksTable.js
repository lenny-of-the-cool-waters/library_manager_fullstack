import React from "react";

const BooksTable = () => {
  return (
    <table className="table table-primary table-striped mt-3">
      <thead className="book-head">
        <tr>
          <td>
            <strong>Title</strong>
          </td>
          <td>
            <strong>Series</strong>
          </td>
          <td>
            <strong>Author</strong>
          </td>
          <td>
            <strong>Pages</strong>
          </td>
          <td>
            <strong>Status</strong>
          </td>
          <td></td>
        </tr>
      </thead>
      <tbody id="book-list"></tbody>
    </table>
  );
};

export default BooksTable;
