import {Image, View} from 'react-native';
import { Styles } from '../Style';
import { Buttos } from './UI/Buttons';

export const HomeScreens = ({navigation}) => {
    return (
        <View style={Styles.container}>
          <Image 
          source={require('../Img/home.png')} 
          onPress={() => navigation.navigate('Chak')}
          />
          
          <Buttos
          press = {() => navigation.navigate('Chak')}
          >
            Давай Чак!
            </Buttos>
          
          
        </View>
    )
}