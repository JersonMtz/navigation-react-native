import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Drawer } from './src/navigator/Drawer';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { DrawerNavigator } from './src/navigator/DrawerNavigator';

const App = () => {
	return (
		<NavigationContainer>
			{/* <StackNavigator /> */}
			{/* <DrawerNavigator /> */}
			<Drawer />
		</NavigationContainer>
	);
}

export default App;