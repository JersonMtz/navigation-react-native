import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const PageOneScreen = ({ navigation }: Props) => {

    useEffect(() => {
        
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Menu" 
                    onPress={ () => navigation.toggleDrawer() }
                />
            )
        })

    }, []);
    


    return (
        <View style={ styles.container }>

            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Page One
            </Text>
            <TouchableOpacity
                style={ styles.button }
                onPress={ () => navigation.navigate('PageTwoScreen') }
            >
                <Text style={{ textAlign: 'center', color: 'white'}}>
                    Go to Page Two
                </Text>
            </TouchableOpacity>

            <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 20 }}>
                Navigation with arg
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'black', marginTop: 10 }]}
                    onPress={ () => navigation.navigate('PersonScreen', { id: 1, name: 'Tony'}) }
                    >
                    <Text style={{ textAlign: 'center', color: 'white'}}>
                        Show Person Tony
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#FFB833', marginTop: 10 }]}
                    onPress={ () => navigation.navigate('PersonScreen', { id: 2, name: 'Violet'}) }
                    >
                    <Text style={{ textAlign: 'center', color: 'white'}}>
                        Show Person Violet
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 15,
        marginTop: 20,
        borderRadius: 5,
    }
});