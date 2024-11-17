import axios from "axios";
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMovieDetailsRequest,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFailure,
  fetchMovieGenereFailure,
  fetchMovieGenereSuccess,
  fetchMovieGenereRequest,
} from "./AppSlices";

const API_KEY = "eda2b43b";



export const fetchMovieGenere = (searchGenere) => async (dispatch) => {
  dispatch(fetchMovieGenereRequest());

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchGenere}&apikey=${API_KEY}`
    );

    if (response.data.Response === "True") {
      dispatch(fetchMovieGenereSuccess(response.data.Search));
    } else {
      dispatch(fetchMovieGenereFailure("No movie found."));
    }
  } catch (err) {
    dispatch(fetchMovieGenereFailure(err.message));
  }
};



export const fetchMovies = (searchQuery) => async (dispatch) => {
  dispatch(fetchMoviesRequest());

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`
    );

    if (response.data.Response === "True") {
      dispatch(fetchMoviesSuccess(response.data.Search));
    } else {
      dispatch(fetchMoviesFailure("No movies found."));
    }
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};


export const fetchMovieDetails = (imdbID) => async (dispatch) => {
  dispatch(fetchMovieDetailsRequest());

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`
    );

    if (response.data.Response === "True") {
      dispatch(fetchMovieDetailsSuccess(response.data));
    } else {
      dispatch(fetchMovieDetailsFailure("Failed to fetch movie details."));
    }
  } catch (error) {
    dispatch(fetchMovieDetailsFailure(error.message));
  }
};
