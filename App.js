// App.js
import React from 'react';
import AppNavigator from './Components/AppNavigator';
import { WorkoutDataProvider } from './Components/WorkoutContext';

export default function App() {
  return (
    <WorkoutDataProvider>
      <AppNavigator />
    </WorkoutDataProvider>
  );
}
