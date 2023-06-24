import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
    reducerPath: 'movie',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/api/'}),
    endpoints: (builder) => ({
        getMovies: builder.query({query: () => 'movies'}),
        getMovie: builder.query({query: (movieId) => `movie?movieId=${movieId}`}),
        getCinemaMovies: builder.query({query: (cinemaId) => `movies?cinemaId=${cinemaId}`}),
        getMoviesForCart: builder.query({
            async queryFn(ids, _queryApi, _extraOptions, fetchWithBQ) {
              const response = await Promise.all(
                ids.map((movieId) => fetchWithBQ(movieId))
              );
              return response[0].data
                ? { data: response.map((movie) => movie.data)}
                : { error: response[0].error};
            },
          })

    })
})

export const {useGetMoviesQuery, useGetMovieQuery, useGetCinemaMoviesQuery, useGetMoviesForCartQuery} = movieApi;

// getMovie: builder.query<Movie[], string>({
//     query: (id) => `${API_ROUTES.movieById}${id}`,
//   }),
//   getMoviesForCart: builder.query<Movie[], string[]>({
//     async queryFn(ids, _queryApi, _extraOptions, fetchWithBQ) {
//       const response = await Promise.all(
//         ids.map((id) => fetchWithBQ(`${API_ROUTES.movieById}${id}`))
//       );
//       return response[0].data
//         ? { data: response.map((movie) => movie.data) as Movie[] }
//         : { error: response[0].error as FetchBaseQueryError };
//     },
//   }),
