import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';
import HeaderRight from './components/HeaderRight';

const Stack = createStackNavigator();

export default Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Recettes" 
                component={Home}
                options={{
                    headerRight: ()=> <HeaderRight/>,
                }}
                />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};


