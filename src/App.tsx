import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './routes';

const App: React.FC = () => (
	<NavigationContainer>
		<StatusBar backgroundColor="#312e38" barStyle="light-content" />
		<AuthRoutes />
	</NavigationContainer>
);

export default App;
