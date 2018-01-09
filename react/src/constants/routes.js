const routes = {
  HOME: () => '/',
  DETAIL: (id = ':id') => `/detail/${id}`,
  USER: () => '/profile',
  LOGIN: () => '/login',
  SIGNUP: () => '/signup'
};

export default routes;
