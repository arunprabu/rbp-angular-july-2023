// Let's have the list of actions for counter feature
/* 
  to successfully create reducer you need to identify all 
  possible actions for the feature.
*/

import { createAction } from "@ngrx/store";

export const increment = createAction('[COUNTER_INCREMENT]');
export const decrement = createAction('[COUNTER_DECREMENT]');
export const reset = createAction('[COUNTER_RESET]');