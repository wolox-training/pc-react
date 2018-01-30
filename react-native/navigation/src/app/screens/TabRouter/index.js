import { TabNavigator } from 'react-navigation';

import routes from '../../../constants/routes';

import Random from './screens/Random';
import Posts from './screens/Posts';

const colors = {
  GREEN: '#80c245',
  GREY: '#f8f8f8'
};

let tabs = {};
tabs[routes.POSTS] = {
  screen: Posts,
};
tabs[routes.RANDOM] = {
  screen: Random,
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
