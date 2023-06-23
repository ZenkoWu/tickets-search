export const selectMovies = (state) => state.movies

export const selectMovie = (state, id) => selectMovies(state)[id] || 0;