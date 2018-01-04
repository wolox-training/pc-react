import api from './config';

const booksGet = (Authorization) => {
  api.setHeader('Authorization', Authorization);
  return api.get(
    '/books'
  );
};

export default booksGet;
