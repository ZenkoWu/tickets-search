import {createSlice} from '@reduxjs/toolkit';

const initialState:any = []

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getMovies: (state: any, {payload}: {payload: any}) => {
            return payload
            
        },
       
    }
})

export const moviesReducer = moviesSlice.reducer;
export const moviesActions = moviesSlice.actions; 