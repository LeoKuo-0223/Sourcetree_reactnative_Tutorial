import React from 'react';
import {
    StyleSheet, View, Text, Button, TouchableOpacity,
    TouchableHighlight, ScrollView, Image, Dimensions,
    FlatList, ImageBackground, Modal
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
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import { color } from 'react-native-reanimated';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
        this.state = {
            token: '',
            url: '',
            apidata: {},
            modalVisible: false,
        }
    }




    cleardata() {
        this.setState({
            token: '',

        })
    }

    getMultiple = async () => {
        try {
            let data = await AsyncStorage.multiGet(['Token', 'account', 'passord'])
            // console.log(data)
            // console.log(data[0][1])
            this.setState({
                token: data[0][1],

            })
            console.log('finish')
            // return data
        } catch (e) {
            console.log('get error')
        }
    }

    componentDidMount() {
        this.getMultiple()



        setTimeout(() => {
            const { token, } = this.state;
            const config = { headers: { 'Authorization': 'Token' + ' ' + token } };
            // console.log(this.state.token)
            // console.log(config);
            axios.get(`http://192.168.137.1:8000/api/`, config)
                .then(res => {
                    const rawdata = res.data;
                    console.log(rawdata)
                    const url = rawdata.projectapp
                    console.log(url)
                    this.setState({
                        url: url,
                    })

                })
                .catch((error) => console.error(error))
                .finally(() => {
                    const { url } = this.state;
                    if (this.state.url !== '') {
                        axios.get(url, config)
                            .then(res => {
                                const apidata = res.data;
                                const usedata = apidata.slice(0, 7)
                                // console.log(usedata)
                                this.setState({
                                    apidata: usedata
                                })
                                // console.log(apidata)
                                // console.log(apidata[0])
                                // let contents = apidata[0]['content']
                                // console.log(contents)

                            })
                            .catch((error) => console.error(error))

                    }
                })
        }, 1000)


    }

    getItemLayout = (data, index) => (
        { length: windowWidth, offset: windowWidth * index, index }
    )


    scrollToIndex = () => {
        let randomIndex = Math.floor(Math.random(Date.now()) * this.state.apidata.length);
        this.state.apidata.scrollToIndex({ animated: true, index: 3 });
    }

    render() {
        return (
            // <LinearGradient colors={['#7ab8cc', 'white', 'lightblue']} style={{
            //     flex: 1,
            //     /* borderWidth: 2, borderColor: 'blue' */
            // }}>
            <ImageBackground
                style={{ width: windowWidth, height: windowHeight, flex: 1 }}
                source={require('../image/family.jpg')}
            // source={{ uri: 'https://images.unsplash.com/photo-1528218635780-5952720c9729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80' }}
            >


                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.5 }}>
                        <View style={{ flexDirection: 'row', flex: 0.2 }}>
                            <View style={{ flex: 0.2, alignSelf: 'center' }}>
                                <TouchableOpacity onPress={() =>
                                    this.props.navigation.dispatch(DrawerActions.openDrawer())}>

                                    <Icon
                                        raised
                                        name='menu'
                                        type='material-community'
                                        color='darkblue'
                                    />

                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 1, justifyContent: 'space-around', paddingRight: 50 }}>
                                <Text style={styles.title}>爸爸の任務</Text>
                            </View>
                        </View>
                        {/* <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 0.7}}>
                            <Image source={require('../image/cooking1.png')}
                                style={{ width: 150, height: 160 }}
                            />
                        </View> */}

                        <View style={{ flex: 0.8,/*  borderColor: 'pink', borderWidth: 5 */ }}>
                            <FlatList
                                data={this.state.apidata}
                                ref={(ref) => { this.state.apidata = ref; }}
                                pagingEnabled={true}
                                keyExtractor={({ id }) => id}
                                horizontal={true}
                                getItemLayout={this.getItemLayout}
                                // initialScrollIndex={0}
                                indicatorStyle='white'
                                showsHorizontalScrollIndicator={true}

                                renderItem={({ item }) => (

                                    <View style={{ width: windowWidth, flex: 1 }}>
                                        <TouchableOpacity style={{ flex: 1 }}
                                            onPress={() => this.props.navigation.navigate('爸爸的叮嚀', { id: item.id })}
                                        >
                                            <View style={{ flex: 0.8 }}>
                                                <ImageBackground
                                                    style={styles.card}
                                                    source={require('../image/strongBaby.jpg')}
                                                />
                                            </View>
                                            <View style={{ flex: 0.2 }}>


                                                <View style={{
                                                    backgroundColor: "white", borderRadius: 10,
                                                    padding: 25, paddingVertical: 10,marginHorizontal:16,
                                                    alignContent: 'center', justifyContent: 'center'
                                                }}>
                                                    <Text style={{
                                                        color: "black", fontSize: 20,
                                                        fontWeight: "bold",
                                                    }}>{String(item.title)}</Text>
                                                </View>

                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                )}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 0.5, marginTop: 20 }}>
                        {/* <View style={{
                            flex: 0.1,
                            justifyContent: 'center', marginBottom: 20
                        }}>
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate('推薦任務')}
                            >
                                <View style={{
                                    flexDirection: 'row', alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <View>
                                        <Icon
                                            name='bell-ring'
                                            type='material-community'
                                            color='red'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{
                                            fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline',
                                            textDecorationColor: 'black',
                                        }}> 本週任務 </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View> */}

                        <View style={{ flex: 1 }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around'/* , borderWidth: 2, borderColor: 'pink' */ }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('爸爸的任務')}
                                >
                                    <View style={{
                                        borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.7)', marginTop: 5,
                                        padding: 15,
                                    }}>
                                        <Icon
                                            raised
                                            name='clipboard-list'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center',backgroundColor:'rgba(255,255,255,0.7)',borderRadius:20,marginTop:5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>爸爸的任務</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('烹飪小教室')}
                                >
                                    <View style={{
                                        borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.7)',
                                        marginTop: 5, padding: 15
                                    }}>
                                        <Icon
                                            raised
                                            name='noodles'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center',backgroundColor:'rgba(255,255,255,0.7)',borderRadius:20,marginTop:5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{'烹飪教室'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('婦幼展覽')}
                                >
                                    <View style={{
                                        borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.7)',
                                        marginTop: 5, padding: 15
                                    }}>
                                        <Icon
                                            raised
                                            name='book-search'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center',backgroundColor:'rgba(255,255,255,0.7)',borderRadius:20,marginTop:5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{'婦幼展覽'}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-around',
                                marginTop: 15
                            }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('烹飪小教室')}
                                >
                                    <View style={{
                                        borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.7)',
                                        marginTop: 5, padding: 15
                                    }}>
                                        <Icon
                                            raised
                                            name='yoga'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center',backgroundColor:'rgba(255,255,255,0.7)',borderRadius:20,marginTop:5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{'孕婦瑜珈'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('共編行事曆')}
                                >
                                    <View style={{
                                        borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.7)',
                                        marginTop: 5, padding: 15
                                    }}>{/* rgba(122,184,204,0.5) */}
                                        <Icon
                                            raised
                                            name='calendar-month-outline'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center',backgroundColor:'rgba(255,255,255,0.7)',borderRadius:20,marginTop:5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{'共編行事曆'}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('孕婦衛教')}
                                >
                                    <View style={{
                                        borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.7)',
                                        marginTop: 5, padding: 15
                                    }}>
                                        <Icon
                                            raised
                                            name='alert-circle-outline'
                                            type='material-community'
                                            color='darkblue'
                                        // onPress={() => console.log('hello')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center',backgroundColor:'rgba(255,255,255,0.7)',borderRadius:20,marginTop:5 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{'孕婦衛教'}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* </LinearGradient> */}
            </ImageBackground>

        )
    }
}


const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        flex: 0.3,
        backgroundColor: 'pink',
        // paddingVertical: 32,
        // padding: 16,
    },
    title: {
        shadowColor:'gray',
        alignSelf: 'center',
        fontSize: 25,
        textShadowColor: 'black',
        color:'white'
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
