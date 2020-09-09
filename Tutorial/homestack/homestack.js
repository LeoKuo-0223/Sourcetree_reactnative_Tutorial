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
import Yoga from '../screens/yoga'
import Healthcontents from '../screens/healthcontents'
import Information from '../screens/information'
import Missioncontents from '../screens/missioncontents';
import Recipe from '../screens/recipe'

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
                <Navigatior.Screen name="婦幼展覽" component={Information} />
                <Navigatior.Screen name="共編行事曆" component={AgendaScreen} />
                <Navigatior.Screen name="爸爸的任務" component={Mission} />
                <Navigatior.Screen name="孕婦衛教" component={HealthyEdu} />
                <Navigatior.Screen name="孕婦瑜珈" component={Yoga} />
                <Navigatior.Screen name="爸爸的叮嚀" component={Healthcontents} />
                <Navigatior.Screen name="任務內容" component={Missioncontents} />
                <Navigatior.Screen name="烹飪教室" component={Recipe} />
            </Navigatior.Navigator>
        )
    }

}

// export default createAppContainer(Homestack)