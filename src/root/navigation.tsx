import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/onboarding/login';
import SignUp from '../components/onboarding/signup';
import routes from '../assests/routes';
import Chat from '../components/dashboard/chat';
import Home from '../components/dashboard/home';
import Storage from '../components/onboarding/asyncStorage';
import Picker from '../components/onboarding/dateTimePicker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


// const Stack = createStackNavigator();

const DashboardNavigation = () => {
    return(
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen component={Chat} name={routes.dashboard.chat.path}/>
            <Tab.Screen component={Home} name={routes.dashboard.home.path} />
        </Tab.Navigator>

    );
};

const Navigation = () => {
    return(
        <NavigationContainer>
    <Tab.Navigator initialRouteName='Login'>
        <Tab.Screen component={Login} name={routes.onboarding.login.path} />
        <Tab.Screen component={Storage} name={routes.onboarding.storage.path} />
        <Tab.Screen component={Picker} name={routes.onboarding.picker.path} />
        <Tab.Screen component={SignUp} name={routes.onboarding.signup.path} options={{ headerShown: false }} />
        <Tab.Screen component={DashboardNavigation} name={routes.dashboard.path}/>
    </Tab.Navigator>
</NavigationContainer>

    );
};

export default Navigation;



