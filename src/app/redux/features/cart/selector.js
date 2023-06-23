const selectCartModule = (state) => state.cart

export const selectProductAmount = (state, id) => selectCartModule(state)?.tickets[id] || 0;