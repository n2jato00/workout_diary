// WorkoutContext.js
import React, { createContext, useContext, useState } from 'react';

const WorkoutDataContext = createContext();

export const useWorkoutData = () => {
  const context = useContext(WorkoutDataContext);
  if (!context) {
    throw new Error('useWorkoutData must be used within a WorkoutDataProvider');
  }
  return context;
};

export const WorkoutDataProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <WorkoutDataContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutDataContext.Provider>
  );
};
