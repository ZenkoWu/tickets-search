import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_ROUTES, BASE_URL} from './api_routes/api_routes'

export const movieApi = createApi({
    reducerPath: 'movie',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getMovies: builder.query({query: () => API_ROUTES.movies}),
        getMovie: builder.query({query: (movieId) => `${API_ROUTES.movieById}${movieId}`}),
        getCinemaMovies: builder.query({query: (cinemaId) => `${API_ROUTES.cinemaMovies}${cinemaId}`}),
        getMoviesForCart: builder.query({
            async queryFn(ids, _queryApi, _extraOptions, fetchWithBQ) {
              const response = await Promise.all(
                ids.map((movieId) => fetchWithBQ(`${API_ROUTES.movieById}${movieId}`))
              );
              console.log(response)
              return response[0].data
                ? { data: response.map((movie) => movie.data)}
                : { error: response[0].error};
            },
          })

    })
})

export const {useGetMoviesQuery, useGetMovieQuery, useGetCinemaMoviesQuery, useGetMoviesForCartQuery} = movieApi;


