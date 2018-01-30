import { StackNavigator } from 'react-navigation';

import routes from './constants/routes';
import Login from './app/screens/Login';
import TabRouter from './app/screens/TabRouter';
import Detail from './app/screens/TabRouter/screens/Detail';

let screens = {};
screens[routes.LOGIN] = {
  screen: Login
};
screens[routes.TAB_ROUTER] = {
  screen: TabRouter
};
screens[routes.DETAIL] = {
  screen: Detail
};

const Main = StackNavigator(screens);

export default Main;
