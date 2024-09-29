/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";

const MOVIES = [
  {
    id: 0,
    movie: "Action",
  },
  {
    id: 1,
    movie: "Drama",
  },
  {
    id: 2,
    movie: "Romance",
  },
  {
    id: 3,
    movie: "Thriller",
  },
  {
    id: 4,
    movie: "Horror",
  },
  {
    id: 5,
    movie: "Western",
  },
  {
    id: 6,
    movie: "Fantasy",
  },
  {
    id: 7,
    movie: "Fiction",
  },
  {
    id: 8,
    movie: "Music",
  },
];

const MovieSelection = () => {
  return <div>MovieSelection</div>;
};

export default MovieSelection;
