import { createSelector } from 'reselect';

const getCommentaries = (store) => store.books.currentBookCommentaries;

const MAX_COMMENTARIES = 4;

export const getLastCommentaries = createSelector(
  [ getCommentaries ],
  (commentaries) => commentaries.sort((a, b) => b.id-a.id).slice(0, MAX_COMMENTARIES)
);
