import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions

} from 'react-native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Recipe extends React.Component {

    render() {
        return (
            <ImageBackground
                source={require('../image/soup1.png')}
                style={{ flex: 1, width: windowWidth, height: windowHeight }}
            >
                <View style={{ flex: 1 }}>


                    <View style={{ flex: 0.1,  }}>
                        <View style={{
                            justifyContent: 'center', marginRight: 125,padding:10,
                            backgroundColor: 'rgba(255,230,217,0.9)', borderBottomRightRadius: 60
                        }}>

                            <Text style={{ color: 'black', fontSize: 30, alignSelf: 'center' }}>香菇烏骨雞湯</Text>

                        </View>
                    </View>
                    <View style={{ flex: 0.9, padding: 15 }}>

                        <View style={{
                            flex: 0.4,padding: 10, backgroundColor: 'rgba(255,255,255,0.6)',
                            borderRadius: 20, padding: 15, justifyContent: 'center', marginTop: 10,
                        }}>
                            <ScrollView>
                                <View style={{ justifyContent: 'center', flex: 0.5 }}>
                                    <Text style={{ color: 'black', fontSize: 30 }}>食材:</Text>
                                    <Text style={{ color: 'black', fontSize: 25, marginTop: 5, }}>
                                        {'烏骨雞肉500g、水1000cc\n枸杞30g、乾燥香菇40g\n鹽ㄧ茶匙、米酒20cc\n薑約3片'}
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{
                            flex: 0.6,  padding: 10, backgroundColor: 'rgba(255,255,255,0.6)',
                            borderRadius: 20, padding: 15, justifyContent: 'center', marginTop: 20,
                        }}>
                            <ScrollView>
                                <View style={{ justifyContent: 'center', flex: 0.5 }}>
                                    <Text style={{ color: 'black', fontSize: 30 }}>步驟:</Text>
                                </View>
                                <View style={{ justifyContent: 'center', flex: 0.5 }}>
                                    <Text style={{ color: 'black', fontSize: 25, marginTop: 5, padding: 5 }}>
                                        {'1. 先準備烏骨雞、香菇、枸杞、米酒、鹽\n\n2. 冷藏盒裝烏骨雞取出洗凈備用\n\n3. 將香菇、枸杞洗凈，薑切片。\n\n4. 先將米酒倒約20cc到碗中備用\n5. 鍋子洗凈，倒入1000cc的水\n\n6. 先將烏骨雞及薑片倒入水中，再將香菇倒入，再來倒入枸杞、米酒和一茶匙的鹽\n\n7. 將三杯小量杯的水倒入電鍋內，再放入加好料的雞肉鍋。壓下電鍋按紐，等待約40分鐘\n\n8. 好喝的養氣明目香菇烏骨雞湯完成'}

                                    </Text>
                                </View>

                            </ScrollView>

                        </View>
                    </View>
                </View>
            </ImageBackground>

        );
    }
}

const viewstyles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topview: {
        flex: 0.35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        flex: 0.25,
    }
});