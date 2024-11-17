import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
  movieDetails: null,
  detailsLoading: false,
  detailsError: null,
  movieGenre: null, 
  genreLoading: false, 
  genreError: null, 

};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
   
    fetchMoviesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMovieDetailsRequest: (state) => {
      state.detailsLoading = true;
      state.detailsError = null;
    },
    fetchMovieDetailsSuccess: (state, action) => {
      state.detailsLoading = false;
      state.movieDetails = action.payload;
    },
    fetchMovieDetailsFailure: (state, action) => {
      state.detailsLoading = false;
      state.detailsError = action.payload;
    },
    fetchMovieGenereRequest: (state) => { 
      state.genreLoading = true; 
      state.genreError = null; 
    },
    fetchMovieGenereSuccess: (state, action) => { 
      state.genreLoading = false; 
      state.movieGenre = action.payload; 
    },
    fetchMovieGenereFailure: (state, action) => { 
      state.genreLoading = false; 
      state.genreError = action.payload; 
    },

   
  },
});

export const {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMovieDetailsRequest,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFailure,
  fetchMovieGenereRequest,
  fetchMovieGenereSuccess,
  fetchMovieGenereFailure,

} = movieSlice.actions;

export default movieSlice.reducer;
