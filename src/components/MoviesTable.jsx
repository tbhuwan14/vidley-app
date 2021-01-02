import React from "react";
import { Link } from "react-router-dom";
import Like from "./common/Like";
import Table from "./common/Table";

function MoviesTable({ newMovies, onDelete, onLike, onSort, sortCol }) {
  const columns = [
    {
      path: "title",
      lable: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    {
      key: "1",
      content: (movie) => (
        <Like liked={movie.liked} handleLike={() => onLike(movie)} />
      ),
    },
    {
      key: "2",
      content: (movie) => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      onSort={onSort}
      sortCol={sortCol}
      data={newMovies}
    />
  );
}

export default MoviesTable;
