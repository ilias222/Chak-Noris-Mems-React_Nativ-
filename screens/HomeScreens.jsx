import {Image, View} from 'react-native';
import { Styles } from '../Style';
import { Buttos } from './UI/Buttons';

export const HomeScreens = ({navigation}) => {
    return (
        <View style={Styles.container}>
          <Image 
          source={require('../Img/Icon.png')} 
          onPress={() => navigation.navigate('Chak')}
          />
          
          <Buttos
          press = {() => navigation.navigate('Chak')}
          >
            Истории Чака!
            </Buttos>
          
          
        </View>
    )
}