//pakage React
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Image, Text, TextInput} from 'react-native';
//function
import { inspect } from './Translate';
//UI
import { Buttos } from './UI/Buttons';
import { Cheked } from './UI/Cheked';
//Stiles
import { Styles } from '../Style';


export const ChakScreens = () => {
    const [textChak, setTextChak] = useState('')
    const [load, setLoad] = useState(false)
    const [toggle, setToggle] = useState(true)
    const [apikey, setApikey] = useState('')

useEffect( () => {setTextChak(toggle ? ()=> 'Привет мой друг. Меня зовут Чак Норрис. \
                                            Для русского перевода нужен апи ключ. \
                                            Получить его можно по адрессу - \
                                            https://rapidapi.com.\
                                            Не забудьте подписаться на сервис!\
                                            После чего введи его в строку выше' : 
                                    () => "Hello, my friend.\
                                            My name is Chuck Norris.\
                                            Press the 'press' button\
                                            and get my new story.")}, 
[toggle])


/**
 * Функция получения случайной фразы Чакка Нориса (апи)
 * На Английском языке
 */
    const axio = async () =>{
        try {
            setLoad(true)
            const historyChak = await axios.get('https://api.chucknorris.io/jokes/random')
                .then(data => data)
                
            historyChak.status === 200 ? 
            Translate(toggle, apikey, historyChak.data.value)
            : 
            setTextChak('Чак не ответил! Он думает.')
            
        } catch (error) {
            setTextChak('Чакк занят. Или Ваша связь не сильна!')
        } finally{
            setLoad(false)
        }
    }

    /**
     * Функция, апи гугл переводчика
     * @param {Переключатель Eng - Rus} toggle 
     * @param {Апи ключ переводчика} apikey 
     * @param {Тело запроса, случайная фраза на Англйском языке} bodys 
     */
    const Translate = (toggle, apikey, bodys) => {
        if (toggle){
            apikey = inspect(apikey)
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': ''+apikey+'',
                'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
            },
            body: `{"from":"en","to":"ru","e":"","q":["${bodys}"]}`
        }
        fetch('https://rapid-translate-multi-traduction.p.rapidapi.com/t', options)
            .then(response => response.json())
            .then(response => {
            response[0] ? 
            setTextChak(response[0]) 
            : 
            setTextChak('API не разобран\
                       Проверьте правильность ключа\
                       или Вашу подписку на\
                       https://rapidapi.com')
            })
    }else{
        setTextChak(() => bodys)
    }
        } 
    return (
        <View style={Styles.chakTitle}>
                
            <View style={Styles.options}>
                <Cheked 
                chek = {() => setToggle(!toggle)}
                />
                {toggle && <TextInput
                placeholder='введите апи ключ переводчика'
                onChangeText={prevText => setApikey(prevText)}
                style={Styles.chakAPIkey}
                placeholderTextColor = 'lightblue'
                />}
            </View>
                <Image 
                style={Styles.chakImg} 
                source={require('../Img/chak2.png')} />
            <View style={Styles.chakAxiosImg}>
                <Text
                style={Styles.textChak}
                >{textChak}</Text>
            </View>
            <View style={Styles.buttos}>
                <Buttos 
                press = {() => axio()}
                shadow = {toggle}
                >
                    {toggle ? "Клик ->" : "Press ->"}
                </Buttos>
            </View>
        </View>
    )
}