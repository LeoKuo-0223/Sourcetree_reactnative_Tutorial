import React from 'react';
import {
    StyleSheet, View, Text, Button, TouchableOpacity,
    TouchableHighlight, ScrollView, Image
} from 'react-native'
import { Icon, Accessory } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import SettingScreen from '../screens/settingscreen'
import Login from '../screens/login ';



class About extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notifications Screen</Text>
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <View style={{ marginTop: 5 }}>
                        <Icon
                            raised
                            name='menu'
                            type='material-community'
                            color='darkblue'
                        // onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}




function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        </DrawerContentScrollView>
    );
}



const Drawer = createDrawerNavigator();

export default class MyDrawer extends React.Component {
    render() {
        return (
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="首頁" component={Login} />
                {/* <Drawer.Screen name="Home" component={Home} /> */}
                <Drawer.Screen name="Setting" component={SettingScreen} />
                <Drawer.Screen name="About us" component={About} />
            </Drawer.Navigator>
        );
    }

}