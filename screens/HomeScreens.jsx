import { useState } from 'react';
import { Button, Image, Text, View, TextInput } from 'react-native';
import { Styles } from '../Style';

export const HomeScreens = ({navigation}) => {
    return (
        <View style={Styles.container} >
          <Image source={require('../Img/Icon.png')} />
          <Text style={Styles.home}>Hello, Chack Mems:)</Text>
          <Button title='Pres to histpry Chak' 
           onPress={() => navigation.navigate('Chak')} />
        </View>
    )
}