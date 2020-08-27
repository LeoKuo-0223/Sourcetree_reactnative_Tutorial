import React from 'react'
// import { createStackNavigator, HeaderBackground } from 'react-navigation-stack';
import {View, TouchableOpacity} from 'react-native'
import { Icon, Accessory } from 'react-native-elements'
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import TODO from '../screens/list_todo';
import AgendaScreen from '../screens/agenda';
import Mission from '../screens/mission';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HealthyEdu from '../screens/healthyEdu'

// const AppNavigator = {
//     首頁: {
//         screen: Home,
//     },
//     清單: {
//         screen: TODO
//     },
//     共編行事曆: {
//         screen: AgendaScreen
//     },
//     推薦任務: {
//         screen: Mission
//     },


// }

// const Homestack = createStackNavigator(AppNavigator);
const Navigatior = createStackNavigator();
export default class MyStack extends React.Component {
    render() {
        return (
            <Navigatior.Navigator>
                <Navigatior.Screen name="首頁" component={Home}/>
                <Navigatior.Screen name="清單" component={TODO} />
                <Navigatior.Screen name="共編行事曆" component={AgendaScreen} />
                <Navigatior.Screen name="推薦任務" component={Mission} />
                <Navigatior.Screen name="孕婦衛教" component={HealthyEdu} />
            </Navigatior.Navigator>
        )
    }

}

// export default createAppContainer(Homestack)