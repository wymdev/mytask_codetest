import React, { useState, useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

//importscreen

import HomeScreen from '../screens/home/HomeScreen';
import TasklistScreen from '../screens/tasks/TasklistScreen';
import ScheduleScreen from '../screens/schedule/ScheduleScreen';
import ReportScreen from '../screens/report/ReportScreen';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                headerShown: false
            }}

        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <AntDesign name="home" color='#000' size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="TaskList"
                component={TasklistScreen}
                options={{
                    tabBarLabel: 'TaskList',
                    tabBarIcon: () => (
                        <AntDesign name="switcher" color='#000' size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Schedule"
                component={ScheduleScreen}
                options={{
                    tabBarLabel: 'Schedule',
                    tabBarIcon: () => (
                        <AntDesign name="calendar" color='#000' size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Report"
                component={WelcomeScreen}
                options={{
                    tabBarLabel: 'Report',
                    tabBarIcon: () => (
                        <AntDesign name="file1" color='#000' size={22} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={BottomTab}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
