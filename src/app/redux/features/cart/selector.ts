import { TState } from "../../store";

export const selectCartModule = (state: TState) => state.cart

export const selectTicketCount = (state: TState, id: keyof TState['cart']['tickets']):any => selectCartModule(state)?.tickets[id];
export const selectTicketsAmount = (state: TState) => selectCartModule(state)?.ticketsCount;