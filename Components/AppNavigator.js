import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddWorkoutScreen from '../Screens/AddWorkout';
import ListOfWorkouts from '../Screens/ListOfWorkouts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();



export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="AddWorkout">
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
