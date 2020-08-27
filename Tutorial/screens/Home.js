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




// function App() {
//     return (
{/* <NavigationContainer>
    <MyDrawer />
</NavigationContainer> */}
//     );
// }

// #F4A698
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <LinearGradient colors={['#7ab8cc', 'white', 'lightblue']} style={{ flex: 1,/* borderWidth: 2, borderColor: 'blue' */}}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.4 }}>
                        <View style={{ flexDirection: 'row'/* , borderWidth: 2, borderColor: 'pink' */, flex: 0.3 }}>
                            <View style={{ flex: 0.2,/*  borderWidth: 2, borderColor: 'coral', */ alignSelf: 'center' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>

                                    <Icon
                                        raised
                                        name='menu'
                                        type='material-community'
                                        color='darkblue'
                                    />

                                </TouchableOpacity>
                            </View>

                            <View style={{  flex:1/* ,borderWidth: 2, borderColor: 'pink' */,justifyContent: 'space-around',paddingRight:50 }}>
                                <Text style={styles.title}>爸爸の任務</Text>
                            </View>
                        </View>
                        <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 0.7/* , borderWidth: 2, borderColor: 'green' */ }}>
                            <Image source={require('../image/cooking1.png')}
                                style={{ width: 150, height: 160 }}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 0.6,/*  borderWidth: 2, borderColor: 'yellow', */ }}>
                        <View style={{ flex: 0.1/* , borderWidth: 2, borderColor: 'pink' */,alignSelf:'center',justifyContent:'center',marginTop:15 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('本週任務')}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                    <View>
                                        <Icon
                                            name='bell-ring'
                                            type='material-community'
                                            color='red'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline', textDecorationColor: 'black', }}> 本週任務 </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 0.9 }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around'/* , borderWidth: 2, borderColor: 'pink' */ }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('推薦任務')}
                                >
                                    <View style={{ borderRadius: 20, backgroundColor: '#7ab8cc', marginTop: 5, padding: 15 }}>
                                        <Icon
                                            raised
                                            name='clipboard-list'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15 }}>推薦任務</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('烹飪小教室')}
                                >
                                    <View style={{ borderRadius: 20, backgroundColor: '#7ab8cc', marginTop: 5, padding: 15 }}>
                                        <Icon
                                            raised
                                            name='noodles'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15 }}>{'烹飪教室'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('清單')}
                                >
                                    <View style={{ borderRadius: 20, backgroundColor: '#7ab8cc', marginTop: 5, padding: 15 }}>
                                        <Icon
                                            raised
                                            name='book-search'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15 }}>{'清單列表'}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15/* , borderWidth: 2, borderColor: 'pink' */ }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('烹飪小教室')}
                                >
                                    <View style={{ borderRadius: 20, backgroundColor: '#7ab8cc', marginTop: 5, padding: 15 }}>
                                        <Icon
                                            raised
                                            name='yoga'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15 }}>{'孕婦瑜珈'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('共編行事曆')}
                                >
                                    <View style={{ borderRadius: 20, backgroundColor: '#7ab8cc', marginTop: 5, padding: 15 }}>
                                        <Icon
                                            raised
                                            name='calendar-month-outline'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15 }}>{'共編行事曆'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('孕婦衛教')}
                                >
                                    <View style={{ borderRadius: 20, backgroundColor: '#7ab8cc', marginTop: 5, padding: 15 }}>
                                        <Icon
                                            raised
                                            name='alert-circle-outline'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15 }}>{'孕婦衛教'}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        backgroundColor: 'pink',
        // paddingVertical: 32,
        // padding: 16,
    },
    title: {
        alignSelf:'center',
        fontSize: 25,
        textShadowColor: '#C1666B'
    },
    text: {
        paddingLeft: 40,
    },
    button: {
        padding: 32,
    },
    button1: {
        marginHorizontal: 40,
        padding: 8,
        backgroundColor: '#48A9A6',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },

})
