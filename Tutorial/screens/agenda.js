// import React from 'react';
// import { StyleSheet, Text } from 'react-native'



// export default class another_page extends React.Component {
//     render() {
//         return (
//             <Text>another page</Text>
//         )

//     }
// }


import React, { Component } from 'react';
import { Alert, ActivityIndicator, Image, StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, TouchableHighlight, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';

const testIDs = require('../testIDs');
export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      change: false,
      eventmarked: {},
      newItems: {},
      id: '',
      items: {},
      modalVisible: false,
    };
  }



  setmodalstate(visible) {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: visible });
  }

  updatecontent(content, id) {
    let data = this.state.items

    let finalvalue = data[id][0]
    finalvalue.contents = content
    // console.log(data[id][0].contents)
    this.setState({
      items: data,
      content: content,

    })
    console.log(data[id][0].contents)
    // console.log(this.state.items)

  }

  render() {
    const state = this.state;
    // let items = state.items;
    const eventmarked = state.eventmarked;
    const { modalVisible } = this.state;
    let Today = new Date();
    let year = String(Today.getFullYear())
    let month;
    let date;
    if ((Today.getMonth() + 1) < 10) {
      month = '0' + String(Today.getMonth() + 1)
    } else {
      month = String(Today.getMonth() + 1)
    }
    if ((Today.getDate()) < 10) {
      date = '0' + String(Today.getDate())
    } else {
      date = String(Today.getDate())
    }
    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={{ flex: 1 }}>
          <Agenda
            items={{
              '2020-08-22': [{ name: 'item 1 - any js object' }],
              '2020-08-23': [{ name: 'item 2 - any js object', height: 80 }],
              '2020-08-24': [],
              '2020-08-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
            }}

            testID={testIDs.agenda.CONTAINER}
            items={this.state.items}
            loadItemsForMonth={this.loadItems.bind(this)}
            selected={year + '-' + month + '-' + date}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            markingType='simple'
            markedDates={eventmarked}
            // markedDates={{
            //  '2020-08-17': {textColor: '#43515c'},
            //  '2020-08-18': {marked: true},
            //  '2020-08-19': {startingDay: true, endingDay: true, color: 'coral'},
            //  '2020-08-20': {startingDay: true, color: 'pink'},
            //  '2020-08-22': {endingDay: true, color: 'pink'},
            //  '2020-08-24': {startingDay: true, color: 'violet'},
            //  '2020-08-25': {color: 'violet'},
            //  '2020-08-26': {endingDay: true, color: 'violet'}}}
            // monthFormat={'yyyy'}
            theme={{
              indicatorColor: 'classicblue',
              selectedDayBackgroundColor: 'lightblue',
              todayTextColor: 'red',
              monthTextColor: 'pink',
              agendaKnobColor: 'lightblue',
              agendaTodayColor: 'red',

            }}
          // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
          // hideExtraDays={false}
          />

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >

            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View >
                  <Text style={styles.modalText}>標題</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textinput}
                    multiline={true}
                    editable={true}
                    dataDetectorTypes='calendarEvent'
                    placeholder='e.g 產檢'
                    returnKeyType='next'
                    maxLength={50}
                    onChangeText={(content) => this.updatecontent(content, this.state.id)}
                  // onChangeText={(content) => this.setState({ content: content })}
                  ></TextInput>
                </View>
                <View style={{ flexDirection: 'row-reverse', alignContent: 'space-between', marginTop: 20 }}>
                  <View style={{ flexDirection: 'row-reverse' }}>
                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "lightblue" }}
                      onPress={() => {
                        this.setState({ modalVisible: false });
                      }}
                    >
                      <Text style={styles.textStyle}>取消</Text>
                    </TouchableHighlight>
                  </View>
                  <View style={{ flexDirection: 'row-reverse' }}>
                    <Text>      </Text>
                  </View>
                  <View style={{ flexDirection: 'row-reverse' }}>
                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "lightblue" }}
                      onPress={() => {
                        this.setState({
                          modalVisible: false,
                          change: true
                        })
                        this.loadItems.bind(this)
                      }}
                    >
                      <Text style={styles.textStyle}>儲存</Text>
                    </TouchableHighlight>

                  </View>
                </View>
              </View>
            </View>
          </Modal>

        </View>
      </TouchableWithoutFeedback >
    );
  }

  loadItems(day) {
    const state = this.state;
    let change = state.change;
    let content = state.content;
    // console.log(day)
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        // console.log(time)
        const strTime = this.timeToString(time);

        // if (!this.state.items[strTime]) {
        //     // console.log(this.state.items[strTime])
        //     // console.log('run_in')
        // this.state.items[strTime] = [];
        //     // const numItems = Math.floor(Math.random() * 3 + 1);
        const numItems = 1  //行事曆欄數

        for (let j = 0; j < numItems; j++) {
          if (change) {
            if (this.state.items[strTime][0].contents !== this.state.newItems[strTime]) {
              this.state.items[strTime].push({
                id: strTime,
                contents: content,
                // name: 'Item for ' + strTime + ' #' + j,
                height: 50,     //行事曆高度
                // height: Math.max(50, Math.floor(Math.random() * 150))
              });
            }
          } else {
            this.state.items[strTime] = [];
            // console.log('run_in_2')
            this.state.items[strTime].push({
              id: strTime,
              contents: '',
              // name: 'Item for ' + strTime + ' #' + j,
              height: 50,     //行事曆高度
              // height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }


        }
        // }
      }
      // this.state.items //必放!!函式規定
      const dict = {};
      const eventmarked = {};
      // console.log(Object.keys(this.state.items));
      Object.keys(this.state.items).forEach(key => { dict[key] = this.state.items[key][0].contents; });
      Object.keys(this.state.items).forEach(key => { eventmarked[key] = { marked: true }; });
      // console.log(dict)
      this.setState({
        newItems: dict,
        eventmarked: eventmarked
      });
      // console.log(this.state.eventmarked)
      console.log(this.state.newItems)
    }, 1000);
  }








  renderItem(item) {
    // console.log(item)

    if (item.contents == '') {
      return (
        <View>
          <TouchableOpacity
            testID={testIDs.agenda.ITEM}
            style={{
              height: item.height,
              flex: 1,
              borderRadius: 5,
              padding: 10,
              marginRight: 10,
              marginTop: 30,
              borderBottomWidth: 2,
              borderBottomColor: '#fff',
              opacity: 0.4,
            }}
            // onPress={() => Alert.alert('Hello')}
            onPress={() => this.setState({ id: item.id }, this.setmodalstate(true))}
          >
            <Image
              source={require('../image/plus-circle.png')}
            />
            {/* <Text style={{ opacity: 0.2 }}>新增行程請點我!</Text> */}
          </TouchableOpacity>
        </View>
      )

    } else {
      return (
        <View>
          <TouchableOpacity
            testID={testIDs.agenda.ITEM}
            style={[styles.item, { height: item.height }]}
            // onPress={() => Alert.alert('Hello')}
            onPress={() => this.setState({ id: item.id }, this.setmodalstate(true))}
          >
            <Text>{item.contents}</Text>
          </TouchableOpacity>
        </View>

      );
    }
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    // console.log(date.toISOString().split('T')[0])
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightgray',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 30
  },
  modalView: {
    // margin: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    paddingTop: 10,
    padding: 10,
    // elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"

  },
  modalText: {
    // marginBottom: 15,
    fontSize: 16,
    // textAlign: 'justify',
  },
  textinput: {
    paddingTop: 10,
    backgroundColor: '#fff',
    borderColor: '#777',
    borderBottomWidth: 2,
    margin: 10
  }
});

