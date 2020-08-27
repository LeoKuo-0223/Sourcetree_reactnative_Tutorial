import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
    return (
        // <Text>snadbox</Text>     // 這裡打sandbox。即<Text>snadbox</Text>
        <View  style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,      //container長度的切點，表<View  style={styles.container}>
        flexDirection:'row',  //flexbox區塊的方向
        justifyContent:'flex-end',    //center,flex-end,flex-start,space-between,space-around
        alignItems:'center',          //水平對齊，變數與justiyContent差不多
        paddingTop: 40,
        backgroundColor:'#ddd'
    },
    //box裡面若都有flex 就會加總後再分割
    boxOne:{
        flex:1,
        backgroundColor:'violet',
        padding:10,
    },
    boxTwo:{
        flex:1,
        backgroundColor:'gold',
        padding:10,
    },
    boxThree:{
        flex:1,
        backgroundColor:'skyblue',
        padding:10,
    },   
    boxFour:{
        flex:1,
        backgroundColor:'coral',
        padding:10,
    }
});
