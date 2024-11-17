import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from '../store/Action';  
import { useParams } from "react-router-dom"; 
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();  
  const dispatch = useDispatch();

  const { movieDetails, detailsLoading, detailsError } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));  
  }, [dispatch, id]); 

  if (detailsLoading) {
    return <p className="text-center text-gray-600">Loading movie details...</p>;
  }

  if (detailsError) {
    return <p className="text-center text-red-600">{detailsError}</p>;
  }

  if (!movieDetails) {
    return <p className="text-center text-gray-600">No details available.</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4 font-serif text-white">
      {/* Movie Title */}
      <h2 className="text-4xl font-bold text-center  mb-6">{movieDetails.Title}</h2>

      {/* Movie Details Section */}
      <div className="lg:flex lg:space-x-12 mb-8">
        {/* Movie Poster */}
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <img 
            src={movieDetails.Poster} 
            alt={movieDetails.Title} 
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

      
        <div className="lg:w-2/3 ">
          <p className="text-xl mb-2"><strong>Year:</strong> {movieDetails.Year}</p>
          <p className="text-xl mb-2"><strong>Rated:</strong> {movieDetails.Rated}</p>
          <p className="text-xl mb-2"><strong>Released:</strong> {movieDetails.Released}</p>
          <p className="text-xl mb-2"><strong>Genre:</strong> {movieDetails.Genre}</p>
          <p className="text-xl mb-4"><strong>Plot:</strong> {movieDetails.Plot}</p>
          <p className="text-xl mb-2"><strong>Cast:</strong> {movieDetails.Actors}</p>
          <p className="text-xl mb-2"><strong>Directors:</strong> {movieDetails.Director}</p>
         
          <p className="text-xl mb-2"><strong>Writers:</strong> {movieDetails.Writer}</p>
          <p className="text-xl mb-2"><strong>Languages:</strong> {movieDetails.Language}</p>
          <p className="text-xl mb-2"><strong>Country:</strong> {movieDetails.Country}</p>
          <p className="text-xl mb-2"><strong>Awards:</strong> {movieDetails.Awards}</p>
          <p className="text-xl mb-2"><strong>BoxOffice:</strong> {movieDetails.BoxOffice}</p>
        </div>
      </div>

      {/* Back to Search Button */}
      <div className="mb-6 text-center">
        <Link to="/" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300">
          Back to Search
        </Link>
      </div>

      {/* IMDb Link */}
      <div className="text-center mt-8">
        <a 
          href={`https://www.imdb.com/title/${movieDetails.imdbID}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-600 text-lg font-semibold"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
};

export default MovieDetail;
