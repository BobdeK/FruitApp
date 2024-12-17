import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';
import FifthScreen from './FifthScreen';
import SixthScreen from './SixthScreen';
import SeventhScreen from './SeventhScreen';
// import RegisterScreen from './RegisterScreen';





const Stack = createNativeStackNavigator();
function RootStack() {
    return(
        <Stack.Navigator>
            {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
            <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FourthScreen" component={FourthScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FifthScreen" component={FifthScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SixthScreen" component={SixthScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SeventhScreen" component={SeventhScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}

export default RootStack;
