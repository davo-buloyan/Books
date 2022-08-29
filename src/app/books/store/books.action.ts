import { createAction, props } from "@ngrx/store";
import { Book } from "./book";

export const invokeBooksAPI = createAction(
  "[Books API] invoke books Fetch API"
);

export const booksFeatchAPISuccess = createAction(
  "[Books API] books Fetch API succes",
  props<{allBooks:Book[]}>()
);

export const invokeSaveBookAPI = createAction(
  "[Books API] invoke save book API",
  props<{payload: Book}>()
);

export const saveBookAPISuccess = createAction(
  "[Books API] save book API success",
  props<{response: Book}>()
);

export const invokeUpdatedBookAPI = createAction(
  "[Books API] invoke update book API",
  props<{payload: Book}>()
);

export const updateBookAPISuccess = createAction(
  "[Books API] update book API success",
  props<{response: Book}>()
);

export const invokeDeleteBookAPI = createAction(
  "[Books API] invoke delete book API",
  props<{id: number}>()
);

export const deleteBookAPISuccess = createAction(
  "[Books API] delete book API success",
  props<{id: number}>()
);
