import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Dimensions, Animated, Button, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { SocialIcon, Avatar, Badge, Icon, withBadge, Input } from 'react-native-elements'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class HealthyEdu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            url: '',
            apidata: {},
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
                    this.cleardata()
                })
                .catch((error) => console.error(error))
                .finally(() => {
                    const { url } = this.state;
                    if (this.state.url !== '') {
                        axios.get(url, config)
                            .then(res => {
                                const apidata = res.data;
                                const usedata = apidata.slice(0, 7)
                                console.log(usedata)
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
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.4,/*  borderColor: 'pink', borderWidth: 5 */ }}>
                    <FlatList
                        data={this.state.apidata}
                        ref={(ref) => { this.state.apidata = ref; }}
                        pagingEnabled={true}
                        keyExtractor={({ id }) => id}
                        horizontal={true}
                        getItemLayout={this.getItemLayout}
                        // initialScrollIndex={0}
                        indicatorStyle='black'

                        renderItem={({ item }) => (

                            <View style={{ width: windowWidth, flex: 1 }}>
                                <TouchableOpacity style={{ flex: 1 }}
                                // onPress={()=> }
                                >
                                    <View style={{ flex: 0.8 }}>
                                        <ImageBackground
                                            style={styles.card}
                                            source={require('../image/strongBaby.jpg')}
                                        />
                                    </View>
                                    <View style={{ flex: 0.2 }}>


                                        <View style={{
                                            backgroundColor: "white", borderRadius: 10, padding: 25,
                                            paddingVertical: 10, alignContent: 'center', justifyContent: 'center'
                                        }}>
                                            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", }}>{String(item.title)}</Text>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            </View>


                        )}
                    />
                </View>
                <View style={{ flex: 0.6, /* borderColor: 'pink', borderWidth: 1, */ }}>
                    <View style={{ flex: 0.1/* , borderWidth: 2, borderColor: 'pink' */, alignSelf: 'center', justifyContent: 'center', marginTop: 5 }}>
                        {/* <TouchableOpacity
                            onPress={this.scrollToIndex}
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
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline', textDecorationColor: 'black', }}> 今日小提醒 </Text>
                                </View>
                            </View>
                        </TouchableOpacity> */}
                    </View>
                    <View style={{ flex: 0.9, }}>

                    </View>



                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
})