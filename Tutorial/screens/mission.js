import React from 'react';
import {
    View, StyleSheet, Text, FlatList, TouchableOpacity,
    Dimensions, Animated, Button, ImageBackground, ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { SocialIcon, Avatar, Badge, Icon, withBadge, Input } from 'react-native-elements'
import CheckBox from '@react-native-community/checkbox';
import { ScrollView } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class HealthyEdu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            url: '',
            apidata: {},
            checkbox: 'checkbox-blank-outline',
            value: false,
            isloading: true
        }
    }



    getMultiple = async () => {
        try {
            let data = await AsyncStorage.multiGet(['Token', 'account', 'passord'])
            // console.log(data)
            // console.log(data[0][1])
            this.setState({
                token: data[0][1],
            })

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
            axios.get(`http://192.168.137.1:8000/api/mission/`, config)
                .then(res => {
                    const rawdata = res.data;
                    console.log(rawdata)
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
                                this.setState({
                                    apidata: apidata,
                                    isloading: false
                                })

                            })
                            .catch((error) => console.error(error))
                        // .finally(() =>
                        //     this.setState({
                        //         token: ''
                        //     })
                        // )
                    }
                })
        }, 1000)


    }

    gettime = (editTime) => {
        const datedata = editTime.split('T')
        const date = datedata[0]
        console.log(datedata[1])
        const detailtimedata = String(datedata[1]).split('.')
        console.log(detailtimedata)
        const detailtime = detailtimedata[0]
        console.log(detailtime)
        return (date + '  ' + detailtime)
    }


    render() {
        const { isloading } = this.state;

        if (isloading) {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flex: 1 }}>
                    <ActivityIndicator size='large' color='black' />
                </View>
            )
        } else {
            return (
                <ImageBackground
                    style={{ width: windowWidth, height: windowHeight, flex: 1 }}
                    source={require('../image/dad2.jpg')}
                // source={{ uri: 'https://images.unsplash.com/photo-1528218635780-5952720c9729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80' }}
                >
                    <View style={{ flex: 1 }}>

                        <View style={{ flex: 0.5,/*  borderColor: 'pink', borderWidth: 5 */ }}>
                            {/* <ScrollView> */}
                            <View style={{
                                backgroundColor: '#FFECF5', padding: 10, borderBottomEndRadius: 30,
                                borderBottomLeftRadius: 30
                            }}>
                                <Text style={{ fontSize: 25, alignSelf: 'center', fontWeight: 'bold' }}>老婆大人的任務清單</Text>
                            </View>
                            <FlatList

                                data={this.state.apidata}
                                keyExtractor={({ id }) => id}
                                renderItem={({ item }) =>
                                    (
                                        <View style={{
                                            flex: 1, backgroundColor: 'rgba(255,255,255,0.9)',
                                            borderRadius: 20, marginHorizontal: 16, marginTop: 10
                                        }}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('任務內容', { id: item.id })}>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <View style={{
                                                        flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5
                                                    }}>
                                                        <Icon
                                                            name={String(item.missiontype)}
                                                            type='material-community'
                                                            size={30}
                                                            color='gray'
                                                        />
                                                    </View>
                                                    <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                                        <Text style={{ fontSize: 18 }}>{String(item.id) + '.'}</Text>

                                                    </View>
                                                    <View style={{
                                                        flex: 0.7, alignSelf: 'center',
                                                        padding: 10, marginVertical: 5
                                                    }}>
                                                        <Text style={{ fontSize: 20, }}>{String(item.title)}</Text>
                                                        <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text>
                                                    </View>
                                                    <View style={{ flex: 0.1, paddingRight: 5, alignSelf: 'center' }}>
                                                        <CheckBox

                                                            value={false}
                                                            boxType={'square'}
                                                        />

                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>




                                    )}
                            />
                            {/* </ScrollView> */}

                        </View>
                        <View style={{ flex: 0.5, /* borderColor: 'pink', borderWidth: 1, */ }}>
                            <View style={{
                                backgroundColor: 'rgba(224,224,224,1)', padding: 10,
                               borderBottomEndRadius:30,borderBottomLeftRadius:30
                            }}>
                                <Text style={{ fontSize: 25, alignSelf: 'center', fontWeight: 'bold' }}>推薦任務</Text>
                            </View>
                            <ScrollView>
                                <View style={{
                                    backgroundColor: 'rgba(255,255,255,0.9)', flex: 0.2,
                                    borderRadius: 20, marginHorizontal: 16, marginTop: 10
                                }}>
                                    {/* <TouchableOpacity onPress={()=>{}}> */}
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{
                                            flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5
                                        }}>
                                            <Icon
                                                name='music'
                                                type='material-community'
                                                size={30}
                                                color='gray'
                                            />
                                        </View>
                                        <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                            <Text style={{ fontSize: 18 }}>{'1' + '.'}</Text>

                                        </View>
                                        <View style={{
                                            flex: 0.7, alignSelf: 'center',
                                            padding: 10, marginVertical: 5
                                        }}>
                                            <Text style={{ fontSize: 20, }}>睡前放一首 德布西的月光 讓寶寶跟媽媽好好放鬆一下吧 !</Text>
                                            {/* <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text> */}
                                        </View>
                                        <View style={{ flex: 0.1, paddingRight: 5, alignSelf: 'center' }}>
                                            <CheckBox

                                                value={false}
                                                boxType={'square'}
                                            />

                                        </View>
                                    </View>
                                    {/* </TouchableOpacity> */}
                                </View>
                                <View style={{
                                    backgroundColor: 'rgba(255,255,255,0.9)', flex: 0.2,
                                    borderRadius: 20, marginHorizontal: 16, marginTop: 10
                                }}>
                                    {/* <TouchableOpacity onPress={()=>{}}> */}
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{
                                            flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5
                                        }}>
                                            <Icon
                                                name='music'
                                                type='material-community'
                                                size={30}
                                                color='gray'
                                            />
                                        </View>
                                        <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                            <Text style={{ fontSize: 18 }}>{'2' + '.'}</Text>

                                        </View>
                                        <View style={{
                                            flex: 0.7, alignSelf: 'center',
                                            padding: 10, marginVertical: 5
                                        }}>
                                            <Text style={{ fontSize: 20, }}>用一張張照片記錄下媽媽懷孕的過程</Text>
                                            {/* <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text> */}
                                        </View>
                                        <View style={{ flex: 0.1, paddingRight: 5, alignSelf: 'center' }}>
                                            <CheckBox

                                                value={false}
                                                boxType={'square'}
                                            />

                                        </View>
                                    </View>
                                    {/* </TouchableOpacity> */}
                                </View>
                                <View style={{
                                    backgroundColor: 'rgba(255,255,255,0.9)', flex: 0.2,
                                    borderRadius: 20, marginHorizontal: 16, marginTop: 10
                                }}>
                                    {/* <TouchableOpacity onPress={()=>{}}> */}
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{
                                            flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5
                                        }}>
                                            <Icon
                                                name='music'
                                                type='material-community'
                                                size={30}
                                                color='gray'
                                            />
                                        </View>
                                        <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                            <Text style={{ fontSize: 18 }}>{'3' + '.'}</Text>

                                        </View>
                                        <View style={{
                                            flex: 0.7, alignSelf: 'center',
                                            padding: 10, marginVertical: 5
                                        }}>
                                            <Text style={{ fontSize: 20, }}>準備熱水熱毛巾溫暖媽媽冰冷的四肢和心</Text>
                                            {/* <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text> */}
                                        </View>
                                        <View style={{ flex: 0.1, paddingRight: 5, alignSelf: 'center' }}>
                                            <CheckBox

                                                value={false}
                                                boxType={'square'}
                                            />

                                        </View>
                                    </View>
                                    {/* </TouchableOpacity> */}
                                </View>
                                <View style={{
                                    backgroundColor: 'rgba(255,255,255,0.9)', flex: 0.2,
                                    borderRadius: 20, marginHorizontal: 16, marginTop: 10
                                }}>
                                    {/* <TouchableOpacity onPress={()=>{}}> */}
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{
                                            flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5
                                        }}>
                                            <Icon
                                                name='music'
                                                type='material-community'
                                                size={30}
                                                color='gray'
                                            />
                                        </View>
                                        <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                            <Text style={{ fontSize: 18 }}>{'4' + '.'}</Text>

                                        </View>
                                        <View style={{
                                            flex: 0.7, alignSelf: 'center',
                                            padding: 10, marginVertical: 5
                                        }}>
                                            <Text style={{ fontSize: 20, }}>帶媽媽出門走走吧 !</Text>
                                            {/* <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text> */}
                                        </View>
                                        <View style={{ flex: 0.1, paddingRight: 5, alignSelf: 'center' }}>
                                            <CheckBox

                                                value={false}
                                                boxType={'square'}
                                            />

                                        </View>
                                    </View>
                                    {/* </TouchableOpacity> */}
                                </View>
                            </ScrollView>

                        </View>

                    </View>
                </ImageBackground>
            )
        }
    }
}


const styles = StyleSheet.create({

})