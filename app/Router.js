import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './screens/Home';
import Details from './screens/Details';
import { Icon } from 'react-native-elements'
import setmodalOpen from './screens/Home'


const Stack = createStackNavigator();

export default Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Recettes" component={Home} options={{
                    headerRight: () => (
                        <Icon
                            name="add-circle"
                            size={25}
                            color="#003d63"
                            onPress={() => setmodalOpen(true)}
                        />
                    ),
                }}
                />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};


