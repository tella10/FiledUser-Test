import { createAction, createReducer, on } from "@ngrx/store";

export const userReducer = createReducer(
    {showCurrency: true },
    on(createAction('[NewRecordUser] Toggle currency'), state => {
        console.log('Orgignal state:'+ JSON.stringify(state))
      return {
        ...state,
        showCurrency: !state.showCurrency
      };
    })
  );