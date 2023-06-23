import {createSlice} from '@reduxjs/toolkit';

const initialState = {
}

const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        increment: (state: any, {payload}: {payload: any}) => {
            const count = state[payload] || 0;
            state[payload] = count + 1
            return state;
        },
        decrement: (state: any, {payload}: {payload: any}) => {
            const count = state[payload];
            if(!count) {
                return;
            }
            
            if(count === 1) {
                delete state[payload]
                return;
            }
            state[payload] = count - 1

        },
        reset: () => initialState
    }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions; 
// в слайсе есть и экшены и редьюсеры - удобная форма создания всего и сразу 