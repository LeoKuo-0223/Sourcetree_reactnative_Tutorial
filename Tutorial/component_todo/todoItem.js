import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// -1 export default function TodoItem(props) {
export default function TodoItem({ item,pressHandler }) {
    // -1 props.item 即表示TodoItem 裡的props
    
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            {/* onPress 按下去 連動到 App.js裡面 TodoItem─pressHandler，but why?? 他沒有匯入APP.js呀
            。item.key 代表the key from the item */}
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding:16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle:'dashed',
        borderRadius: 10
    }
})