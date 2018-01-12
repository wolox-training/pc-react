import { createSelector } from 'reselect';

const MAX_COMMENTARIES = 4;

const getBookCommentaries = (store) => store.books.currentBookCommentaries;
const getProfileCommentaries = (store) => store.users.profileState.comments;
const getLastCommentaries = (commentaries) => commentaries.sort((a, b) => b.id-a.id).slice(0, MAX_COMMENTARIES);
const getNotifications = (store) => store.users.notifications;

export const getLastBookCommentaries = createSelector(
  getBookCommentaries ,
  getLastCommentaries
);

export const getLastProfileCommentaries = createSelector(
  getProfileCommentaries ,
  getLastCommentaries
);

export const getUnreadNotifications = createSelector(
  getNotifications,
  notifications => notifications.filter(notification => !notification.read)
);
