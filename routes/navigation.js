import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/gameScreen';
import LeadersBoard from '../screens/leaderBoard';

const routes = {
    Home: {
        screen: HomeScreen,
        options: {
            headerShown: false
        }
    },
    Game: {
        screen: GameScreen,

    },
    LeadersBoard: {
        screen: LeadersBoard
    }
}
const stackOptions = {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    initialRouteName: 'Home'
}




const Navigator = createStackNavigator(routes,stackOptions);


export default createAppContainer(Navigator);