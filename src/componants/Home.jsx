import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchMovieGenere } from "../store/Action";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  
  const searchParams = new URLSearchParams(location.search);
  const initialSearchQuery = searchParams.get("query") || "";
  const initialSearchGenere = searchParams.get("genre") || "Comedy"; 

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [searchGenere, setSearchGenere] = useState(initialSearchGenere);

  const {
    items: movies,
    loading,
    error,
    movieGenre,
    genreLoading,
    genreError,
  } = useSelector((state) => state.movie);

 
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/?query=${searchQuery}&genre=${searchGenere}`);
      dispatch(fetchMovies(searchQuery));
    }
  };


  const handleSearchByGenre = () => {
    if (searchGenere.trim()) {
      navigate(`/?query=${searchQuery}&genre=${searchGenere}`);
      dispatch(fetchMovieGenere(searchGenere));
    }
  };

  
  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchMovies(searchQuery));
    }
  }, [searchQuery, dispatch]);


  useEffect(() => {
    if (searchGenere) {
      dispatch(fetchMovieGenere(searchGenere));
    }
  }, [searchGenere, dispatch]);

  return (
    <div className="max-w-screen-xl mx-auto p-6 font-serif ">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">
        Movie Search
      </h1>

      {/* Movie Search */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-8 space-y-4 md:space-y-0">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a movie"
          className="w-full md:w-96 p-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button
          onClick={handleSearch}
          className="mt-4 md:mt-0 md:ml-4 bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {/* Movies Results */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies?.map((movie) => (
          <div key={movie.imdbID} className="rounded-lg shadow-2xl overflow-hidden">
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-xl text-gray-900">{movie.Title}</h3>
                <p className="text-gray-700">{movie.Year}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Genre Search */}
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-semibold text-white mb-6">
          Search Movies by Genre
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <input
            type="text"
            value={searchGenere}
            onChange={(e) => setSearchGenere(e.target.value)}
            placeholder="Enter Genre (e.g., Comedy)"
            className="w-full md:w-96 p-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            onClick={handleSearchByGenre}
            className="mt-4 md:mt-0 md:ml-4 bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>

      {genreLoading && <p className="text-center text-gray-600">Loading...</p>}
      {genreError && <p className="text-center text-red-600">{genreError}</p>}

      {/* Genre Search Results */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {movieGenre?.map((movie) => (
          <div key={movie.imdbID} className="rounded-lg shadow-2xl overflow-hidden">
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-xl text-gray-900">{movie.Title}</h3>
                <p className="text-gray-700">{movie.Year}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
