let Pol
export const Translate = (toggle, apikey, bodys) => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': ''+apikey+'',
                'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
            },
            body: `{"from":"en","to":"ru","e":"${bodys}","q":["${bodys}"]}`
        }
        return async() => await fetch('https://rapid-translate-multi-traduction.p.rapidapi.com/t', options)
            .then(response => response.json())
            .then(response => {console.log(response)})
            
        } 

        const inspect = (keys) =>{
            const inspector = /[0-9][a-z]/
            if(inspector.test(keys)){
                console.log('ключ прошел')
                return keys
            } else {
                console.log('ключ не прошел')
                keys = 11111111111
                return keys
            }
        }