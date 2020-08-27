import React from 'react';
import { View, Text, ScrollView } from 'react-native';
export default class Mission extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
        }
    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
                <View style={{ flex: 0.2, backgroundColor: 'pink' }}>

                </View>
                <View style={{ flex: 0.8, backgroundColor: 'gray' }}>
                    <ScrollView>

                    </ScrollView>
                </View>
            </View>
        )

    }
}
