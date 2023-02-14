import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreens } from '../HomeScreens';
import { ChakScreens } from '../ChakScreens';

const Stack = createNativeStackNavigator();

export const Navigate = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreens}/>
            <Stack.Screen name='Chak' component={ChakScreens} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}