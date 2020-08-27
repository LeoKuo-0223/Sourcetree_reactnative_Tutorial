// import React from 'react';
// import { StyleSheet,Text} from 'react-native'

// export default class the_other_page extends React.Component {
//     render() {
//         return (
//             <Text>the other page</Text>
//         )

//     }
// }


import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'; 
//TouchableWithoutFeedback, Keyboard 讓點螢幕時鍵盤可以消掉
import Header from '../component_todo/header';   //import "moduleName"→Header
import TodoItem from '../component_todo/todoItem';
import AddTodo from '../component_todo/addTodo';
import Sandbox from '../component_todo/sandbox';   //番外

// 與todoItem 的export default function TodoItem({ item }) 裡面的東西相互影響
export default function TODO() {         //匿名函式的形式匯出。記名的話：default省略→'export function APP() {'，但import時就要取相同名稱才能爬到資料
  const [todos, setTodos] = useState([  //const 即為python之def，可用function替代
    { text: '下週媽咪身體檢查', key: '1'},
    { text: '買媽咪喜歡的甜點', key: '2'},
    { text: '買晚上要煮的清菜', key: '3'}
  ]);
  //*註：希望之後改成 timetree一樣有時間功能的提醒事項
  
  const pressHandler = (key) => {   //定義好pressHandler，是針對todos裡面的key
    setTodos((prevTodos) => {       //setTodos裡面加一個屬性preTodos
      return prevTodos.filter(todo => todo.key != key); //過濾掉已經做完的事
    });
  }

  const submitHandler = (text) => {   //值從addTodo的console.log(text)} 裡面來→改成submitHandler
    setTodos ((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },  
        // text對應key。Math.random()函數返回一個介於0~1之間的浮點數；toString()可將所有的的資料都轉換為字串，*除了null 和 undefined。
        ...prevTodos    //還不知道是什麼意思
      ];
    })
  }
    //還不能用 
    // if (text.kength >3){
    //   setTodos((prevTodos) => {
    //     return[
    //       { text: text, key: Math.random().toString() },  // text對應key。Math.random()函數返回一個介於0~1之間的浮點數；toString()可將所有的的資料都轉換為字串，*除了null 和 undefined。
    //       ...prevTodos
    //     ];
    //   });
    // } else {
    //   Alert.alert('OOPS!','Todos must be over 3 chars long ,[
    //     {text: 'Understood',onPress:() => console.log ('alert closed')}
    //   ]);
    // }

  return (
    // <Sandbox />
     <TouchableWithoutFeedback onPress={() => {   //TouchableWithoutFeedback點了沒有反饋，就是讓他消掉(完成的todo~)
       Keyboard.dismiss();
       console.log('dismissed keyboard');
     }}>
       {/* 格式：View包文字(header,text) */}
       <View style ={styles.container}>
         {/*header 標題格式*/}
         <Header />      
         {/* 匯入後，這邊就可以直接用'Header' */}
         <View style={styles.content}>
           {/* to form 內文格式*/}
           <AddTodo submitHandler={submitHandler}/>
           {/* submitHandler在這裡 */}
           <View style={styles.list}>
             <FlatList   //簡單列表組件，需要data、renderItem(裡面的item[props]數據)
               data={todos}
               renderItem={({ item }) => (   //renderItem：從data依序取出數據並渲染到列表中
                 <TodoItem item={item} pressHandler={pressHandler}/>    //在清單裡設置按鈕→執行過濾程序
               )}
             />
           </View>
         </View>
      
       </View>
     </TouchableWithoutFeedback>
  );
}
//設計樣式
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },
  content: {
    padding:40,
    // backgroundColor: 'yellow',
    flex:1,
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: 'pink'
  }
});