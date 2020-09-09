import React from 'react';
import {
    View, StyleSheet, Text, FlatList, TouchableOpacity,
    Dimensions, Animated, Button, ImageBackground, ScrollView
} from 'react-native';
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


    render() {
        return (
            <ImageBackground
                style={{ height: windowHeight, width: windowWidth,flex:1 }}
                source={require('../image/health.jpg')}
            >
                <View style={{ flex: 1 }}>
                    <View style={{flex:0.5}}>

                    </View>
                    <ScrollView>
                        <View style={{ flex: 1 }}>
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
                                        name='chart-line'
                                        type='material-community'
                                        size={30}
                                        color='gray'
                                    />
                                </View>
                                <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 18 }}>{'1' + '.'}</Text>

                                </View>
                                <View style={{
                                    flex: 0.8, alignSelf: 'center',
                                    padding: 10, marginVertical: 5
                                }}>
                                    <Text style={{ fontSize: 20, }}>準媽媽的健康注意事項</Text>
                                    {/* <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text> */}
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
                                        name='bell-alert-outline'
                                        type='material-community'
                                        size={30}
                                        color='gray'
                                    />
                                </View>
                                <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 18 }}>{'2' + '.'}</Text>

                                </View>
                                <View style={{
                                    flex: 0.8, alignSelf: 'center',
                                    padding: 10, marginVertical: 5
                                }}>
                                    <Text style={{ fontSize: 20, }}>亮黃燈!注意危險徵兆</Text>
                                    {/* <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text> */}
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
                                        name='baby'
                                        type='material-community'
                                        size={30}
                                        color='gray'
                                    />
                                </View>
                                <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 18 }}>{'3' + '.'}</Text>

                                </View>
                                <View style={{
                                    flex: 0.8, alignSelf: 'center',
                                    padding: 10, marginVertical: 5
                                }}>
                                    <Text style={{ fontSize: 20, }}>新生兒哺育計畫</Text>
                                    {/* <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text> */}
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
                                        name='mother-nurse'
                                        type='material-community'
                                        size={30}
                                        color='gray'
                                    />
                                </View>
                                <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 18 }}>{'4' + '.'}</Text>

                                </View>
                                <View style={{
                                    flex: 0.8, alignSelf: 'center',
                                    padding: 10, marginVertical: 5
                                }}>
                                    <Text style={{ fontSize: 20, }}>當個舒適自在的準媽媽</Text>
                                    {/* <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text> */}
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
                                        name='allergy'
                                        type='material-community'
                                        size={30}
                                        color='gray'
                                    />
                                </View>
                                <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 18 }}>{'5' + '.'}</Text>

                                </View>
                                <View style={{
                                    flex: 0.8, alignSelf: 'center',
                                    padding: 10, marginVertical: 5
                                }}>
                                    <Text style={{ fontSize: 20, }}>趕走對胎兒的不良影響</Text>
                                    {/* <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text> */}
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
                                        name='head-check-outline'
                                        type='material-community'
                                        size={30}
                                        color='gray'
                                    />
                                </View>
                                <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 18 }}>{'6' + '.'}</Text>

                                </View>
                                <View style={{
                                    flex: 0.8, alignSelf: 'center',
                                    padding: 10, marginVertical: 5
                                }}>
                                    <Text style={{ fontSize: 20, }}>吃出健康</Text>
                                    {/* <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text> */}
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
                                        name='account-heart'
                                        type='material-community'
                                        size={30}
                                        color='gray'
                                    />
                                </View>
                                <View style={{ flex: 0.1, marginTop: 5, alignSelf: 'center', paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 18 }}>{'7' + '.'}</Text>

                                </View>
                                <View style={{
                                    flex: 0.8, alignSelf: 'center',
                                    padding: 10, marginVertical: 5
                                }}>
                                    <Text style={{ fontSize: 20, }}>準媽媽生活保健DIY</Text>
                                    {/* <Text style={{ justifyContent: 'space-around' }}>{this.gettime(item.editTime)}</Text> */}
                                </View>

                            </View>
                            {/* </TouchableOpacity> */}
                        </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>


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