import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { Styles } from '../Style';

export const ChakScreens = () => {
    const [textChak, setTextChak] = useState('Hello, my name - Chack Norris')
    const [load, setLoad] = useState(false)
    const axio = async () =>{
        try {
            setLoad(true)
            const historyChak = await axios.get('https://api.chucknorris.io/jokes/random')
                .then(data => data)
                
            if(historyChak.status === 200){
                setTextChak(historyChak.data.value)
            }
        } catch (error) {
            alert('Что то пошло не так. Спроси чака еще раз.')
        } finally{
            setLoad(false)
        }
    }
    return (
        <View style={Styles.chakTitle}>
            <Text style={Styles.chakTitleImg}>Нажимай на кнопку, и чат поделится с тобой мудростью</Text>
            <View>
                <Image style={Styles.chakImg} source={require('../Img/chak.png')} />
                <Text style={Styles.chakAxiosImg}>{textChak}</Text>
                <View style={Styles.chakButton}>
                    <Button
                        title='Спросить Чака'
                        onPress={axio}
                        />
                    </View>
            </View>
        </View>
    )
}