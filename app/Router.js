import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './screens/Home';
import Details from './screens/Details';
import HeaderRight from './components/HeaderRight';
import { Icon } from 'react-native-elements'
import setmodalOpen from './screens/Home'


const Stack = createStackNavigator();

export default Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Recettes" component={Home} options={{
                    headerRight: ()=> (
                        <Icon 
                            name="add" 
                            size={25} 
                            color="blue"
                        />
                    ),
                }}
                />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};


