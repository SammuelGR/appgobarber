import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import AuthRoutes from './routes';

const App: React.FC = () => (
	<NavigationContainer>
		<StatusBar backgroundColor="#312e38" barStyle="light-content" />
		<AppProvider>
			<View style={{ flex: 1, backgroundColor: '#312e38' }}>
				<AuthRoutes />
			</View>
		</AppProvider>
	</NavigationContainer>
);

export default App;
