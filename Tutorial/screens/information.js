import React from 'react';
import { View, Text, Image, Dimensions, ScrollView, Linking } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Image } from 'react-native-elements';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Information extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ alignSelf: 'center', padding: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'全台婦幼展覽資訊'}</Text>
                    </View>
                    <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => Linking.openURL('https://cheng-sing.com/blog/4ROl3g')}>

                        <Image
                            style={{ width: windowWidth, height: 300, borderRadius: 20, paddingHorizontal: 10 }}

                            source={{ uri: 'https://cheng-sing.com/photos/2020/814%E4%B8%96%E8%B2%BF%E5%A9%A6%E5%B9%BC/NEW_%E6%BB%BF%E5%8D%83%E6%8A%98%E7%99%BE.jpg' }}
                        // source={require('../image/strongBaby.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => Linking.openURL('https://taichungmombaby-fair.top-link.com.tw/ticket/10723')}>
                        <Image
                            style={{ width: windowWidth, height: 300, borderRadius: 20, paddingHorizontal: 10 }}

                            source={{ uri: 'https://cdn.top-link.com.tw/uploadfiles/850/ticket/ggQhqVk8YdfG.jpg' }}
                        // source={require('../image/strongBaby.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => Linking.openURL('https://cheng-sing.com/blog/CY1v3V')}>
                        <Image
                            style={{ width: windowWidth, height: 300, borderRadius: 20, paddingHorizontal: 10 }}

                            source={{ uri: 'https://cheng-sing.com/photos/2020/903%E5%8F%B0%E5%8D%97%E5%A9%A6%E5%B9%BC/%E6%B4%BB%E5%8B%95%E5%A0%B1%E5%90%8D_%E5%B0%BF%E5%B8%83%E9%A0%90%E7%B4%84.jpg' }}
                        // source={require('../image/strongBaby.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => Linking.openURL('http://hipage.malldj.com/Edm/edm_1902h/index.html')}>
                        <Image
                            style={{ width: windowWidth, height: 300, borderRadius: 20, paddingHorizontal: 10 }}

                            source={{ uri: 'http://hipage.malldj.com/Edm/edm_1902h/images/edm_01_01.jpg' }}
                        // source={require('../image/strongBaby.jpg')}
                        />
                    </TouchableOpacity>
                </ScrollView>

            </View>
        )
    }
}