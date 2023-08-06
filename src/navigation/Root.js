import React, { useState, useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import AsyncStorage from '@react-native-async-storage/async-storage';

//importscreen

import HomeScreen from '../screens/home/HomeScreen';
import TasklistScreen from '../screens/tasks/TasklistScreen';
import ScheduleScreen from '../screens/schedule/ScheduleScreen';
import ReportScreen from '../screens/report/ReportScreen';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import CompletedTasksDetail from '../screens/completed_tasks_detail/CompletedTasksDetail';
import TaskInstructionScreen from '../screens/task_instruction/TaskInstructionScreen';
import NotificationListScreen from '../screens/notification/NotificationListScreen';

import SplashScreen from '../components/SplashScreen/SplashScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();





const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompletedTasksDetail"
        component={CompletedTasksDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationList"
        component={NotificationListScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#9EE96F',
        headerShown: false,
        activeTintColor: '#9EE96F',
        inactiveTintColor: '#000',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={22} />,
        }}
      />
      <Tab.Screen
        name="TaskList"
        component={TasklistScreen}
        options={{
          tabBarLabel: 'TaskList',
          tabBarIcon: ({ color }) => (
            <AntDesign name="switcher" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={WelcomeScreen}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color }) => <AntDesign name="file1" color={color} size={22} />,
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {

  const [firstLaunch, setFirstLaunch] = React.useState(null);

  React.useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem("appLaunched");
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);


  
  return (
    firstLaunch != null && (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>

          {firstLaunch && (
            <Stack.Screen name="GetStarted" component={WelcomeScreen} />
          )}

          <Stack.Screen
            name="Main"
            component={BottomTab}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
          name="CompletedTasksDetail"
          component={CompletedTasksDetail}
          options={{headerShown: false}}
        /> */}
          <Stack.Screen
            name="Taskinstruction"
            component={TaskInstructionScreen}
            options={{ headerShown: false }}
          />


        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};
