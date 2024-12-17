import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import FirstScreen from '../Screens/FirstScreen';
import SecondScreen from '../Screens/SecondScreen';
import ThirdScreen from '../Screens/ThirdScreen';
import FourthScreen from '../Screens/FourthScreen';
import FifthScreen from '../Screens/FifthScreen';
import SixthScreen from '../Screens/SixthScreen';
import SeventhScreen from '../Screens/SeventhScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const NewNavigator = createStackNavigator({
    First: { 
        screen: FirstScreen ,
        navigationOptions: { 
          header:() => false,
        }
     }, 
     Second: { 
        screen: SecondScreen ,
        navigationOptions: { 
          header:() => false,
        }
     }, 
    Third: { 
        screen: ThirdScreen ,
        navigationOptions: { 
          header:() => false,
        }
     }, 
    Fourth: { 
        screen: FourthScreen ,
        navigationOptions: { 
          header:() => false,
        }
     }, 
    Fifth: { 
        screen: FifthScreen ,
        navigationOptions: { 
          header:() => false,
        }
     }, 
    Sixth: { 
        screen: SixthScreen ,
        navigationOptions: { 
          header:() => false,
        }
     },
     Seventh: { 
      screen: SeventhScreen ,
      navigationOptions: { 
        header:() => false,
      }
   },
   Register: { 
    screen: RegisterScreen ,
    navigationOptions: { 
      header:() => false,
    }
 },
    
});

export default createAppContainer(NewNavigator);