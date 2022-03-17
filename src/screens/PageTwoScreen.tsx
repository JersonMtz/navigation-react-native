import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const PageTwoScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: 'Change name!!',
            headerBackTitle: '<<'
        });
    }, []);
    

    return (
        <View style={ styles.container }>
            <Text>Page Two</Text>
            <TouchableOpacity
                style={ styles.button }
                onPress={ () => navigation.navigate('PageThreeScreen' as never) }
            >
                <Text style={{ textAlign: 'center', color: 'white'}}>
                    Go to Page Three
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    button: {
        backgroundColor: '#BD4DE1',
        padding: 15,
        marginVertical: 20,
        borderRadius: 5,
    }
});