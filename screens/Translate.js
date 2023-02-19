import { Styles } from "../Style"

export const Translate = (toggle, apikey, bodys) => {
    apikey = inspect(apikey)
    if(toggle){
        options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': apikey,
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: "q="+bodys+"&target=ru&soutce=en"
        }

        let translate

                //response.data.translations[0].translatedText -- trace object
        fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
                .then(response => response.json())
                .then(response => {translate = response})
                translate?.data.translations[0].translatedText ? 
                translate = translate.data.translations[0].translatedText
                :
                translate = 'Ключ апи не определен!\n Проверьте правильность ввода \
                            и Вашу подписку на\n https://rapidapi.com/googlecloud/api'
        console.log(translate)
        return translate
        } else {
            return bodys
        }
        } 

        const inspect = (keys) =>{
            const inspector = /[0-9a-zA-Z]*10/
            if(inspector.test(keys)){
                Styles.chakAPIkey[color] = 'lightblue'
                return keys
            } else {
                Styles.chakAPIkey[color] = 'red'
                keys = 00000000000
                return keys
            }
        }