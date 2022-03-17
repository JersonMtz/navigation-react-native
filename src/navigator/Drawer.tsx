import { 
        createDrawerNavigator, 
        DrawerContentComponentProps, 
        DrawerContentScrollView 
    } from '@react-navigation/drawer';

import { useWindowDimensions, View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PageOneScreen } from '../screens/PageOneScreen';
import { SettingScreen } from '../screens/SettingScreen';
// import { StackNavigator } from './StackNavigator';

const _Drawer = createDrawerNavigator();

export const Drawer = () => {

    const { width } = useWindowDimensions();

    return (
        <_Drawer.Navigator
            screenOptions={{
                drawerType: (width >= 768) ? 'permanent' : 'front'
            }}
            drawerContent={ (props) => <MenuIntern { ...props } /> }>
            {/* <_Drawer.Screen name="StackNavigator" component={ StackNavigator } /> */}
            <_Drawer.Screen name="PageOneScreen" component={ PageOneScreen } />
            <_Drawer.Screen name="SettingScreen"  component={ SettingScreen } />
        </_Drawer.Navigator>
    );
}


const MenuIntern = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Image 
                    source={{
                        uri: 'https://gladstoneentertainment.com/wp-content/uploads/2018/05/avatar-placeholder.gif'
                    }}
                    style={{
                        borderRadius: 100,
                        height: 150,
                        width: 150,
                    }}
                    />        
            </View>

            <View style={ styles.container }>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('PageOneScreen') } 
                    style={ styles.button }>
                    <Text style={ styles.buttonText }>PageOne Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={ () => navigation.navigate('SettingScreen') } 
                    style={ styles.button }>
                    <Text style={ styles.buttonText }>Settings</Text>
                </TouchableOpacity>
            </View>
            
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    button: {
        marginVertical: 10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20
    }

});