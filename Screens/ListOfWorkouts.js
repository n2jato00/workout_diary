import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../Styles/MainStyle.js';
import { Card, SegmentedButtons, Avatar, Icon } from 'react-native-paper';
import { WorkoutContext } from '../Components/Context.js';

export default function ListOfWorkouts() {
  const { workouts } = useContext(WorkoutContext);

  const [selectedSportType, setSelectedSportType] = useState(null);
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    updateTotals();
  }, [workouts, selectedSportType]);

  const updateTotals = () => {
    let distanceSum = 0;
    let durationSum = 0;

    workouts.forEach((workout) => {
      if (!selectedSportType || workout.sportType === selectedSportType) {
        distanceSum += workout.distance;
        durationSum += workout.duration;
      }
    });

    setTotalDistance(distanceSum);
    setTotalDuration(durationSum);
  };

/*   const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }; */


  const renderItem = ({ item }) => {
    if (selectedSportType && item.sportType !== selectedSportType) {
      return null;
    }

    return (
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
              title={[item.date]}
              titleVariant="titleMedium"
              left={(props) => (
                <Avatar.Icon
                  {...props}
                  icon={
                    item.sportType === "running"
                      ? "run"
                      : item.sportType === "cycling"
                      ? "bike"
                      : item.sportType === "swimming"
                      ? "swim"
                      : "run"
                  }
                />
              )}
            />
        <Card.Content>
          <Text>Distance: {item.distance} km</Text>
          <Text>Duration: {item.duration} minutes</Text>
        </Card.Content>
      </Card>
    );
  };

  const handleSportTypeChange = (sportType) => {
    setSelectedSportType(sportType);
  };

  const buttonOptions = [
    { label: 'All', value: null },
    { value: 'running', icon: 'run'},
    { value: 'cycling', icon: 'bike'},
    { value: 'swimming', icon: 'swim'},
  ];

  return (
    <View style={styles.Flatlist}>
      <SegmentedButtons
        value={selectedSportType}
        onValueChange={handleSportTypeChange}
        buttons={buttonOptions}
      />

      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID}
      />

      {selectedSportType && (
        <Card style={{ marginTop: 20 }}>
          <Card.Content>
            <Text>Total Distance for {selectedSportType}: {totalDistance.toFixed(2)} km</Text>
            <Text>Total Duration for {selectedSportType}: {totalDuration.toFixed(2)} minutes</Text>
          </Card.Content>
        </Card>
      )}
    </View>
  );
}
