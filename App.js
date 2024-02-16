// App.js
import React, { useState } from 'react';
import AppNavigator from './Components/AppNavigator';
import { WorkoutContext } from './Components/Context';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyTheme } from './Styles/MainStyle';

export default function App() {

  const [workouts, setWorkouts] = useState([
    // Sample data as assigned in the exercise
    {
      ID: 'unique_id_12',
      sportType: "running",
      distance: 10,
      duration: 30,
      date: '1/1/2021',
      icon: 'run',
    },
    {
      ID: 'unique_id_13',
      sportType: "cycling",
      distance: 20,
      duration: 60,
      date: '1/1/2024',
      icon: 'bike',
    },
  ]);
  const [units, setUnits] = useState("km");

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts, units, setUnits }}>
      <PaperProvider theme={MyTheme}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </PaperProvider>
    </WorkoutContext.Provider >
  );
}
