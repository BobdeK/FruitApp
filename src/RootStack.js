import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';



const Stack = createNativeStackNavigator();
function RootStack() {
    return(
        <Stack.Navigator>
            {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
            <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default RootStack;
