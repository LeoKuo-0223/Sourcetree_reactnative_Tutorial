import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function AddTodo ({ submitHandler}){     //在AddTodo裡面加入submitHandler這個屬性
    const [text,setText] = useState('');                //先設好一個空字串
    
    const changeHandler =(str) => {     //看有str(val))的每一行，他是照這樣對應過去的
        setText(str);
    }

    return (
        <View>
            <TextInput                       //加入一個可以輸入東西的區塊
                style= {styles.input}        //定義它的功能Input
                placeholder = 'new todo...'  //預設值為new todo，讓使用者知道要填什麼
                onChangeText = {changeHandler}
                // onChangeText (val) => {changeHandler(val)}
            />
            <Button onPress ={() => submitHandler(text)} title='add todo' color='coral' />      
            {/* 原：console.log(text)，可以查詢text裡面的東西，填完之後會submit到Todo清單裡面 */}
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})