import { StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';

import { RootStackParams } from '../navigator/StackNavigator';

// interface ParamsType {
//     id: number;
//     name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{};

export const PersonScreen = ({ route, navigation }: Props) => {

    // const params = route.params as ParamsTypes;
    const params = route.params;

    useEffect(() => {
        
        navigation.setOptions({
            title: params.name
        });

    }, []);
    

    return (
        <View style={ styles.container }>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
                Person Screen
            </Text>

            <Text style={{ fontSize: 20 }}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
});