import { createReducer, on } from "@ngrx/store";
import { Book } from "./book";
import { booksFeatchAPISuccess, deleteBookAPISuccess, saveBookAPISuccess, updateBookAPISuccess } from "./books.action";


export const ititialState: ReadonlyArray<Book> = [    {
  "id": 1,
  "title": "Harry Poter and the Philosphers Stone",
  "author": "J.K Rowling",
  "cost": 300
}];

export const bookReducer = createReducer(
  ititialState,
  on(booksFeatchAPISuccess,(state, {allBooks}) => {
    return allBooks
  }),
  on(saveBookAPISuccess, (state, { response }) => {
    let newState = [...state];
    newState.unshift(response);
    return newState
  }),
  on(updateBookAPISuccess, (state, {response}) => {
    let newState = state.filter(_ => _.id !== response.id)
    newState.unshift(response);
    return newState;
  }),
  on(deleteBookAPISuccess,(state, {id}) => {
    let newState = state.filter(_ => _.id !== id);
    return newState
  })

)
