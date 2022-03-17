import { DrawerScreenProps } from '@react-navigation/drawer';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props extends DrawerScreenProps<any, any> {}

export const SettingScreen = ({ navigation }: Props) => {

    useEffect(() => {
        
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={ () => navigation.toggleDrawer() }>
                    <Text style={{ padding: 10, color: '#22A7F2' }}>MENU</Text>
                </TouchableOpacity>
            )
        })

    }, [])

    return (
        <View>
            <Text>
                Settings Screen
            </Text>
        </View>
    )
}
