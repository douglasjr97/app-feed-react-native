import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import Login from './login';
import Tabs from './tabs';
const Stack= createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen  name="Login" component={Login}/>
                <Stack.Screen  name="Feed" component={Tabs}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}
