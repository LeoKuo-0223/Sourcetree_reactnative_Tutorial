import React from 'react';
import { View, Text } from 'react-native';
export default class HealthyEdu extends React.Component {

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
        return (
            <View style={{flex:1}}>
                <View style={{flex:0.3}}>

                </View>
                <View style={{flex:0.7}}>

                </View>
            </View>

        )
    }
}