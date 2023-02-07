import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactList from './src/screens/ContactList';
import User from './src/screens/User';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ContactList"
          component={ContactList}
          options={{
            headerStyle: {
              backgroundColor: '#202329',
            },
            headerTintColor: '#EBEFF1',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerStyle: {
              backgroundColor: '#202329',
            },
            headerTintColor: '#EBEFF1',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
