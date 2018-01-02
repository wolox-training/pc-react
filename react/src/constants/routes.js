const routes = {
  HOME: () => '/',
  DETAIL: (id = ':id') => `/detail/${id}`
};

export default routes;
