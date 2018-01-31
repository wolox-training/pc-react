import { TabNavigator } from 'react-navigation';

import routes from '../../../constants/routes';
import colors from '../../../constants/colors';

import Random from './screens/Random';
import Posts from './screens/Posts';

const tabs = {
  [routes.POSTS]: { screen: Posts },
  [routes.RANDOM]: { screen: Random },
};

const TabRouter = TabNavigator(
  tabs,
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      inactiveTintColor: colors.GREY,
      tabStyle: { backgroundColor: colors.GREEN }
    },
  }
);

export default TabRouter;
