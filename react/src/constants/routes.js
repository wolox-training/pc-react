const routes = {
  HOME: () => '/',
  DETAIL: (id = ':id') => `/detail/${id}`,
  LOGIN: () => '/login',
  SIGNUP: () => '/signup'
};

export default routes;
