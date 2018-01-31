import { StackNavigator } from 'react-navigation';

import routes from './constants/routes';
import Login from './app/screens/Login';
import TabRouter from './app/screens/TabRouter';
import Detail from './app/screens/TabRouter/screens/Detail';

const screens = {
  [routes.LOGIN]: { screen: Login },
  [routes.TAB_ROUTER]: { screen: TabRouter },
  [routes.DETAIL]: { screen: Detail },
};

const Main = StackNavigator(screens);

export default Main;
