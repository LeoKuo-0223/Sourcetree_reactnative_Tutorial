import React, { Component } from 'react';
import { StyleSheet, View, Button, Image, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Alert } from 'react-native';
import { SocialIcon, Avatar, Badge, Icon, withBadge, Input } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from '../homestack/homestack';
import axios from 'axios'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changestate: false,
            account: '',
            password: '',
            Token: '',
            tohome: false,
            passwordvisible: true,
            eye: 'eye-outline'
        }
    }


    gobackLogin() {
        console.log('changestate' + this.state.changestate)
        console.log(this.state.Token)
        Alert.alert('帳號或密碼錯誤')
        this.setState({
            changestate: false,
            account: '',
            password: '',
            Token: '',
           
        })


    }

    //Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b
    getAuthentication() {
        const { Token } = this.state
        this.setState({
            changestate: true
        })
        const { account, password } = this.state;
        const config = { 'username': account, 'password': password };
        console.log(config);
        axios.post(`http://192.168.137.1:8000/api-token-auth/`, config)
            .then(res => {
                const rawdata = res.data;
                const Token = rawdata.token;
                this.setState({ Token: Token });
                console.log(Token)
                // this.setState({ isLoading: false });
                if (Token !== '') {
                    Alert.alert('登入成功')
                    this.setState({
                        tohome: true
                    })
                }
            })
            .catch((error) => console.error(error))
            .finally(() => {
                if (!this.state.tohome) {
                    this.gobackLogin()
                }
            })

    }

    render() {
        const { changestate, tohome,eye } = this.state
        if (!changestate) {
            return (
                <TouchableWithoutFeedback
                    onPress={() => { Keyboard.dismiss() }}>
                    <View style={styles.container}>
                        <View style={{ flex: 0.4, alignSelf: 'center' }}>
                            <Image source={require('../image/cooking.png')} style={styles.image} />
                        </View>
                        <View style={{ flex: 0.1, alignContent: 'center', justifyContent: 'center' }}>
                            <Text style={styles.text}>得心孕手</Text>
                        </View>

                        <View style={{ marginLeft: 40, marginRight: 40, flex: 0.3, paddingTop: 40 }}>
                            <View style={{ flex: 0.5 }}>
                                <Input
                                    placeholder='ACCOUNT'
                                    leftIcon={
                                        <Icon
                                            name='account-circle'
                                            type='material-community'
                                            size={24}
                                            color='black'
                                        />
                                    }
                                    onChangeText={(account) => this.setState({ account: account })}
                                />
                            </View>

                            <View style={{ flex: 0.5 }}>
                                <Input
                                    secureTextEntry={this.state.passwordvisible}
                                    textContentType='password'
                                    placeholder="PASSWORD"
                                    leftIcon={
                                        <Icon
                                            name='key-outline'
                                            type='material-community'
                                            size={24}
                                            color='black'

                                        />}
                                    rightIcon={
                                        <TouchableOpacity
                                            onPress={() => {
                                                if (this.state.passwordvisible) {
                                                    this.setState({ 
                                                        passwordvisible: false,
                                                        eye: 'eye-off-outline'
                                                   
                                                    })
                                                } else {
                                                    this.setState({ 
                                                        passwordvisible: true ,
                                                        eye: 'eye-outline'
                                                    })
                                                }
                                            }}>
                                            <Icon
                                                name={this.state.eye}
                                                type='material-community'
                                                size={24}
                                                color='black'

                                            />
                                        </TouchableOpacity>

                                    }
                                    onChangeText={(password) => this.setState({ password: password })}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0.2, }}>
                            <View style={{ marginRight: 100, marginLeft: 100, borderRadius: 20, flex: 1, marginVertical: 10, }}>
                                <Button
                                    title='登入'
                                    onPress={() => this.getAuthentication()}
                                />
                            </View>

                        </View>
                    </View>
                </TouchableWithoutFeedback >
            )
        } else if (changestate) {
            if (!tohome) {
                return (
                    <View style={{ alignSelf: 'center', flex: 1, marginTop: 200 }}>
                        <ActivityIndicator size="large" color="pink" />
                    </View>
                )
            } else {
                return (
                    <Navigator />
                )

            }




        }

    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    image: {
        width: 300,
        height: 400,
        flex: 1,
        resizeMode: 'contain',
    },

    // bgImageWrapper: {
    //     opacity: 0.6,
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     bottom: 0,
    //     right: 0
    // },

    bg: {
        flex: 1,
        width: null,
        height: null,

        resizeMode: "cover"
    },

    text: {
        alignSelf: 'center',
        fontSize: 25
    },

});