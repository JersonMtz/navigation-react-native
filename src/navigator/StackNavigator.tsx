import { createStackNavigator } from '@react-navigation/stack';
import { PageOneScreen } from '../screens/PageOneScreen';
import { PageThreeScreen } from '../screens/PageThreeScreen';
import { PageTwoScreen } from '../screens/PageTwoScreen';
import { PersonScreen } from '../screens/PersonScreen';

export type RootStackParams = {
    PageOneScreen: undefined,
    PageTwoScreen: undefined,
    PageThreeScreen: undefined,
    PersonScreen: { id: number, name: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="PageOneScreen"
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
            >
            <Stack.Screen 
                name="PageOneScreen"   
                component={ PageOneScreen } 
                options={{ title: "Home" }} 
            />

            <Stack.Screen 
                name="PageTwoScreen"   
                component={ PageTwoScreen } 
                options={{ title: "Page 2" }} 
            />
            
            <Stack.Screen 
                name="PageThreeScreen" 
                component={ PageThreeScreen } 
                options={{ title: "Page 3" }} 
            />

            <Stack.Screen 
                name="PersonScreen" 
                component={ PersonScreen } 
                options={{ title: "Details Person" }} 
            />
        </Stack.Navigator>
    );
}