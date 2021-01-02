import React, { useState } from "react";
import { getGenres } from "../Services/fakeGenreService";
import { paginate } from "../utils/Paginate";
import { getMovies } from "./../Services/fakeMovieService";
import ListGroup from "./common/ListGroup";
import Pagination from "./common/Pagination";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

function Movies() {
  const [movies, setMovies] = useState(getMovies);
  const fakeGenres = [{ name: "All Genres" }, ...getGenres()];
  const [genres] = useState(fakeGenres);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortCol, setSortCol] = useState({ path: "title", order: "asc" });
  const size = 4;
  const [currPage, setCurrPage] = useState(1);
  const handleDelete = (movie) => {
    const newMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(newMovies);
  };
  const handleLike = (movie) => {
    const newMovies = [...movies];
    const index = newMovies.indexOf(movie);
    newMovies[index].liked = !newMovies[index].liked;
    setMovies(newMovies);
  };
  const handlePageChange = (page) => {
    setCurrPage(page);
  };
  const handleGenresSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrPage(1);
  };
  const handleSort = (newSortCol) => {
    setSortCol(newSortCol);
  };

  const filtered =
    selectedGenre && selectedGenre._id
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;
  const sorted = _.orderBy(filtered, [sortCol.path], [sortCol.order]);
  const newMovies = paginate(sorted, currPage, size);

  return (
    <div className="row">
      <div className="col-3">
        <ListGroup
          items={genres}
          onItemSelect={handleGenresSelect}
          selectedItem={selectedGenre}
        />
      </div>
      <div className="col">
        <MoviesTable
          newMovies={newMovies}
          onLike={handleLike}
          onDelete={handleDelete}
          onSort={handleSort}
          sortCol={sortCol}
        />
        <Pagination
          itemCount={filtered.length}
          pageSize={size}
          currPage={currPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Movies;
