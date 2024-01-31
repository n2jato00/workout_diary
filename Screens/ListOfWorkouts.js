import React from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';
import { styles } from '../Styles/MainStyle.js';
import { useWorkoutData } from '../Components/WorkoutContext.js';
import { Card } from 'react-native-paper';

export default function ListOfWorkouts() {
  const { workouts } = useWorkoutData();

  const renderItem = ({ item }) => (
    <Card style={{}}>
      <Card.Title title={item.sportType} />
      <Card.Content>
        <Text>Distance: {item.distance} km</Text>
        <Text>Duration: {item.duration} minutes</Text>
        <Text>Date: {item.date}</Text>
      </Card.Content>
    </Card>
  );

  return (
      <View style={styles.Flatlist}>
        <FlatList
          data={workouts}
          renderItem={renderItem}
          keyExtractor={(item) => item.ID} // Assuming date.dateString is a unique identifier
        />
      </View>
  );
}
