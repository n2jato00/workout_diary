// App.js
import React, { useState } from 'react';
import AppNavigator from './Components/AppNavigator';
import { WorkoutContext } from './Components/Context';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MyTheme } from './Styles/MainStyle';

export default function App() {

  const [workouts, setWorkouts] = useState([]);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      <PaperProvider theme={MyTheme}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </PaperProvider>
    </WorkoutContext.Provider >
  );
}
