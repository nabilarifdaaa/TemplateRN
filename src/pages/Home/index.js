import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.replace('MainApp')}>
            <View style={{padding: 50}}>
                <Text>Home Screen</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Home
