import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { SettingScreen } from '../screens/SettingScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                // drawerPosition: 'right',
                drawerType: (width >= 768) ? 'permanent' : 'front'
            }}>
            <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
            <Drawer.Screen name="SettingScreen"  component={ SettingScreen } />
        </Drawer.Navigator>
    );
}