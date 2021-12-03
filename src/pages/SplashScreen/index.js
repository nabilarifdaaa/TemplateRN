import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000);
    }, [])

    return (
        <View style={{padding: 50}}>
            <TouchableOpacity>
                <Text>Splash Screen</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Splash
