import api from './config';

const bookGet = (Authorization, bookId) => {
  api.setHeader('Authorization', Authorization);
  return api.get(
    `/books/${bookId}`
  );
};

export default bookGet;
