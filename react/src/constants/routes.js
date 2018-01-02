const routes = {
  HOME: () => '/',
  DETAIL: (id = ':id') => `/detail/${id}`,
  LOGIN: () => '/login'
};

export default routes;
