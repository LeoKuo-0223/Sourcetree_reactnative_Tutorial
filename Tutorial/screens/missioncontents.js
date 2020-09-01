import React, { Component } from 'react';
import {
    StyleSheet, View, Text, ScrollView, ActivityIndicator,
    SafeAreaView, Image, FlatList, ImageBackground, Dimensions
} from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Missioncontents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            url: '',
            contents: '',
            title: '',
            time: '',
            isloading: false,
        }
    }


    getMultiple = async () => {
        try {
            let data = await AsyncStorage.multiGet(['Token', 'account', 'passord'])
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
        const { id } = this.props.route.params;//pass param between screens
        console.log(id)
        this.getMultiple()
        setTimeout(() => {
            const { token, } = this.state;
            const config = { headers: { 'Authorization': 'Token' + ' ' + token } };
            axios.get(`http://192.168.137.1:8000/api/mission/`, config)
                .then(res => {
                    const rawdata = res.data;
                    // console.log(rawdata)
                    const url = rawdata.MissionPage
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
                                const usedata = apidata[id - 1];
                                const title = usedata.title;
                                const contents = usedata.content;
                                const time = usedata.editTime
                                console.log(contents)
                                // console.log(usedata)
                                this.setState({
                                    contents: contents,
                                    title: title,
                                    time: time,
                                    isloading: true

                                })
                                this.setState({
                                    token: '',
                                })
                            })
                            .catch((error) => console.error(error))
                    }
                })
        }, 1000)
    }
    render() {
        const { title, contents, isloading, time } = this.state
        const datedata = time.split('T')
        const date = datedata[0]
        console.log(datedata[1])
        const detailtimedata = String(datedata[1]).split('.')
        console.log(detailtimedata)
        const detailtime = detailtimedata[0]
        console.log(detailtime)
        if (!isloading) {
            return (<ImageBackground
                style={{ width: windowWidth, height: windowHeight, flex: 1 }}
                source={require('../image/dad2.jpg')}

            >
                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size='large' color='white' />
                </View>
            </ImageBackground >
            )
        } else {
            return (
                <ImageBackground
                    style={{ width: windowWidth, height: windowHeight, flex: 1 }}
                    source={require('../image/dad2.jpg')}
                >
                    <View style={{ flex: 1 }}>
                        <View style={{
                            flex: 0.1, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 15,
                            justifyContent: 'center', marginVertical: 5, paddingHorizontal: 20, marginHorizontal: 10
                        }}>

                            <Text style={{ fontSize: 28 }}>{title}</Text>
                        </View>
                        <View style={{ flex: 0.4 }}>

                        </View>
                        <View style={{
                            flex: 0.4, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 15,
                            marginVertical: 5, paddingHorizontal: 20, marginHorizontal: 10, paddingTop: 20
                        }}>
                            <Text style={{ fontSize: 20 }}>{contents}</Text>
                            <View style={{ flex: 1, marginTop: 15 }}>
                                <Text>{date + '  ' + detailtime}</Text>
                            </View>

                        </View>
                        <View style={{ flex: 0.1, flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.7)' }}>
                            <View style={{
                                flex: 0.5, backgroundColor: 'red',
                                borderRadius: 20, padding: 10, alignSelf: 'center', marginHorizontal: 40
                            }}>
                                <TouchableOpacity >
                                    <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>接受</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flex: 0.5, backgroundColor: 'lightgreen',
                                borderRadius: 20, padding: 10, alignSelf: 'center', marginHorizontal: 40
                            }}>
                                <TouchableOpacity >
                                    <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>接受</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            )

        }
    }
}
