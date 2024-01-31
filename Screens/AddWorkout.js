// AddWorkoutScreen.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, SafeAreaView, Modal, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { styles } from '../Styles/MainStyle.js';
import { MD3LightTheme, Provider, SegmentedButtons } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { WorkoutDataProvider, useWorkoutData } from '../Components/WorkoutContext.js'

export default function AddWorkoutScreen() {
    const { addWorkout } = useWorkoutData();


    const [sportType, setSportType] = useState('running');
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [visible, setVisible] = useState(false);


    const buttonOptions = [
        { label: 'Running', value: 'running' },
        { label: 'Cycling', value: 'cycling' },
        { label: 'Swimming', value: 'swimming' },
    ];

    const addWorkoutHandler = () => {
        const distanceValue = parseFloat(distance);
        const durationValue = parseFloat(duration);

        if (distanceValue <= 0 || durationValue <= 0 || isNaN(distanceValue) || isNaN(durationValue)) {
            // Handle invalid input values here
            alert('Invalid input values');
            return;
        }

        const workout = {
            ID: generateUniqueId(),
            sportType: sportType,
            distance: distanceValue,
            duration: durationValue,
            date: date,
        };

        addWorkout(workout);
        console.log(workout);
    };
    const generateUniqueId = () => {
        // Implement your logic to generate a unique ID
        // For simplicity, you might use a library like `uuid` or a timestamp-based approach
        return 'unique_id_' + Date.now();
      };

    function dateSelected(day) {
        setVisible(false);
        setDate(day.dateString);
    }


    return (
        <Provider theme={MD3LightTheme}>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text>Sport Type:</Text>
                        <View>
                            <SegmentedButtons
                                value={sportType}
                                onValueChange={setSportType}
                                buttons={buttonOptions}
                            />
                        </View>
                    <Text>Distance (km):</Text>
                    <TextInput
                        keyboardType="numeric"
                        value={distance}
                        onChangeText={(text) => setDistance(text)}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
                    />

                    <Text>Duration (minutes):</Text>
                    <TextInput
                        keyboardType="numeric"
                        value={duration}
                        onChangeText={(text) => setDuration(text)}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
                    />

                    <Text>Date:</Text>
                    <Pressable
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
                        onPress={() => setVisible(true)}>
                        <Text style={{ fontSize: 19 }}>{date}</Text>
                    </Pressable>
                    <Modal visible={visible} transparent={true}>
                        <Calendar onDayPress={dateSelected} />
                    </Modal>
                    <Button title="Add Workout" onPress={addWorkoutHandler} />
                    <StatusBar style="auto" />
                </View>
            </SafeAreaView>
        </Provider>
    );
};
