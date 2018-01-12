import { createSelector } from 'reselect';

const MAX_COMMENTARIES = 4;

const getBookCommentaries = (store) => store.books.currentBookCommentaries;
const getProfileCommentaries = (store) => store.users.profileState.comments;
const getLastCommentaries = (commentaries) => commentaries.sort((a, b) => b.id-a.id).slice(0, MAX_COMMENTARIES);

export const getLastBookCommentaries = createSelector(
  getBookCommentaries ,
  getLastCommentaries
);

export const getLastProfileCommentaries = createSelector(
  getProfileCommentaries ,
  getLastCommentaries
);
