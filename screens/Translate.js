/**
 * Функция - инспектор валидности апи ключа переводчика
 * @param {Получает введенный пользователем ключ} keys 
 * @returns 
 */
export const inspect = (keys) =>{
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