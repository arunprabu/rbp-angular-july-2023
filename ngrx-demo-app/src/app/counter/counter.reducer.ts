import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  // here you need to have actions 
  on(increment, (state) => {
    console.log(state);
    // this must return updated state
    return state + 1; // updating the state
  }),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
)

