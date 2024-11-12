import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import FirstScreen from './FirstScreen';



const Stack = createNativeStackNavigator();
function RootStack() {
    return(
        <Stack.Navigator>
            {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
            <Stack.Screen name="FirstScreen" component={FirstScreen} />
        </Stack.Navigator>
    );
}

export default RootStack;
