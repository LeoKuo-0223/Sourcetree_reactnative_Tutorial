import React, { Component } from 'react';
import {
    StyleSheet, View, Text, ScrollView, ActivityIndicator,
    SafeAreaView, Image, FlatList, ImageBackground
} from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
export default class Healthcontents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            url: '',
            contents: '',
            title: '',
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
            axios.get(`http://192.168.137.1:8000/api/`, config)
                .then(res => {
                    const rawdata = res.data;
                    // console.log(rawdata)
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
                                const usedata = apidata[id - 1];
                                const title = usedata.title;
                                const contents = usedata.content;
                                console.log(contents)
                                // console.log(usedata)
                                this.setState({
                                    contents: contents,
                                    title: title,
                                    isloading: true
                                })
                                // console.log(apidata)
                                // console.log(apidata[0])
                                // let contents = apidata[0]['content']
                                // console.log(contents)
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
        const { contents, title, isloading } = this.state
        if (!isloading) {
            return (
                <View style={{ marginTop: 200, }}>
                    <ActivityIndicator size='large' color='pink' />
                </View>

            )
        } else {
            return (
                // <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.5 }}>
                        <View style={{ flex: 0.3, padding: 15, }}>
                            <Text style={{ fontSize: 28 }}>{title}</Text>
                        </View>
                        <View style={{ flex: 0.7, marginTop: 10 }}>
                            <ImageBackground
                                style={styles.card}
                                source={require('../image/strongBaby.jpg')}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 0.5, marginTop:20}}>
                        <ScrollView>
                            <View style={{ flex: 0.5, padding: 10 }}>
                                <Text style={{ fontSize: 20 }}>{contents}</Text>
                            </View>
                        </ScrollView>
                    </View>

                </View>
                // </ScrollView>

            )
        }

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
})