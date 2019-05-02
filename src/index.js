import { createMaterialTopTabNavigator, createAppContainer, BottomTabBar } from 'react-navigation';

import Main from './pages/main';
import Profile from './pages/profile';

const MainNavigator = createMaterialTopTabNavigator({
    Main,
    Profile
},
{
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeTintColor: '#602060',
        inactiveTintColor: '#ecc6ec',
        pressColor: '#ecc6ec',
        // Os dois comandos abaixo não são compatíveis com o MaterialTop
        // activeBackgroundColor: '#602060', 
        // inactiveBackgroundColor: '#ecc6ec',
        indicatorStyle: {backgroundColor: 'white'},
        style: {
            backgroundColor: '#602060',
            height: 55
        }
    }
}
);

export default createAppContainer(MainNavigator);