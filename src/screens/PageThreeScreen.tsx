import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const PageThreeScreen = ({ navigation }: Props) => {
    return (
        <View style={ styles.container }>
            <Text>Page One</Text>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#00E8A9' }]}
                onPress={ () => navigation.pop() }
            >
                <Text style={{ textAlign: 'center', color: 'white'}}>
                    Go back
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#FF6C37' }]}
                onPress={ () => navigation.popToTop() }
            >
                <Text style={{ textAlign: 'center', color: 'white'}}>
                    Go to home
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
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
    }
});