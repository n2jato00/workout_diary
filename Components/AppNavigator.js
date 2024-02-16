import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddWorkoutScreen from '../Screens/AddWorkout';
import ListOfWorkouts from '../Screens/ListOfWorkouts';
import Settings from '../Screens/Settings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyTheme } from '../Styles/MainStyle';

const Tab = createBottomTabNavigator();



export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="AddWorkout"
      screenOptions={{
        tabBarActiveTintColor: 'black' , 
        tabBarInactiveTintColor: MyTheme.colors.primary,
        tabBarStyle: {backgroundColor: MyTheme.colors.surface},
        }}>
        <Tab.Screen 
          name="AddWorkout" 
          component={AddWorkoutScreen} 
          options={{
            tabBarLabel: 'Workouts',
            tabBarIcon: ({ color }) => (
              <Icon name='plus' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="ListOfWorkouts" 
          component={ListOfWorkouts} 
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color }) => (
              <Icon name='format-list-bulleted' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <Icon name='cog' color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
