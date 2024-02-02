// AddWorkoutScreen.js
import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Modal, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { styles } from '../Styles/MainStyle.js';
import { SegmentedButtons, Button, TextInput } from 'react-native-paper';
import { WorkoutContext } from '../Components/Context.js';


export default function AddWorkoutScreen() {

    const { workouts, setWorkouts } = useContext(WorkoutContext);

    const [sportType, setSportType] = useState('running');
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [visible, setVisible] = useState(false);



    const buttonOptions = [
        { label: 'Running', value: 'running', icon: 'run'},
        { label: 'Cycling', value: 'cycling' , icon: 'bike'},
        { label: 'Swimming', value: 'swimming' , icon: 'swim'},
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

        setWorkouts([...workouts, workout]);
        setDistance('');
        setDuration('');

    };
    const generateUniqueId = () => {
        // Implement your logic to generate a unique ID
        // For simplicity, you might use a library like `uuid` or a timestamp-based approach
        return 'unique_id_' + Date.now();
    };

    function dateSelected(day) {
        setVisible(false);
    
        const selectedDate = new Date(day.dateString);
        const formattedDate = selectedDate.toLocaleDateString();
    
        setDate(formattedDate);
    }


    return (
        <View style={styles.container}>
            
            <View>
                <SegmentedButtons
                    value={sportType}
                    onValueChange={setSportType}
                    buttons={buttonOptions}
                />
            </View>
            <TextInput
                keyboardType="numeric"
                mode='outlined'
                label={'Distance (km)'}
                value={distance}
                onChangeText={setDistance}
                style={{ marginBottom: 10, marginTop: 5}}
            />
            <TextInput
                keyboardType="numeric"
                mode='outlined'
                label={'Duration (minutes)'}
                value={duration}
                onChangeText={setDuration}
                style={{ marginBottom: 10}}
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
            <Button mode="contained" onPress={addWorkoutHandler}>Add Workout</Button>
            <StatusBar style="auto" />
        </View>
    );
};
