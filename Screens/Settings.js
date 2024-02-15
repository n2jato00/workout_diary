import React, { useContext } from "react";
import { View, Text, StatusBar } from "react-native";
import { RadioButton } from "react-native-paper";
import { WorkoutContext } from '../Components/Context.js';
import { styles } from '../Styles/MainStyle.js';

export default function SettingsScreen() {
  const { units, setUnits } = useContext(WorkoutContext);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RadioButton.Group
        value={units}
        onValueChange={(newValue) => {
          setUnits(newValue);
        }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>Units</Text>
          <RadioButton.Item label="Kilometers" value="km" />
          <RadioButton.Item label="Miles" value="mi" />
        </View>
      </RadioButton.Group>
    </View>
  );
}
