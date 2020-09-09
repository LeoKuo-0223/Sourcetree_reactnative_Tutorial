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

export default class Yoga extends React.Component {

    render() {
        return (
            <ImageBackground
                source={require('../image/beach.jpg')}
                style={{ height: windowHeight, width: windowWidth, flex: 1 }}
            >
                <ScrollView>
                    <View style={{ flex: 1,padding:10 }}>
                        <View style={{ flex: 0.4,marginTop:10, marginRight:5  }}>
                            <Image
                                style={{ height: 220, width: windowWidth-15,}}
                                // resizeMethod='resize'
                                // resizeMode='stretch'
                                source={require('../image/video.png')}
                            />
                        </View>


                        <View style={{
                            flex: 0.6, backgroundColor: 'rgba(255,255,255,0.7)',
                            borderRadius: 20, padding: 15, justifyContent: 'center',
                             alignSelf: 'center',marginTop:20
                        }}>
                            <View style={{ justifyContent: 'center', flex: 0.5 }}>
                                <Text style={{ color: 'black', fontSize: 25 }}>
                                    &emsp;&emsp;
                                    上身挺直，坐在地板上，胳膊伸到背後，
                                    用力支撐起身體和彎曲的膝關節形成一個鬆散的菱形。
                                    上身輕輕前傾手指環繞握住腳趾和雙腳外側，
                                將腳底推向一起，盡量將腳向骨盆帶拉回。</Text>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 0.5,marginTop:10 }}>
                                <Text style={{ color: 'black', fontSize: 25, }}>
                                    &emsp;&emsp;
                                    同時保持脊椎挺直，自然呼吸，上下擺動雙膝，
                                    使其如同蝴蝶雙翅翻飛，感受大腿內側頂部韌帶緩和和漸進的伸展。
                                    保持20-30秒，熱身以後，加強韌帶的伸展，吸氣然後呼氣，
                                同時用胳膊肘向外向下按壓雙膝，保持20-30秒，再吸氣然後挺直上身。</Text>
                            </View>

                        </View>

                    </View>
                </ScrollView>
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


