import React, { useContext } from "react";
import { View, Text, StatusBar } from "react-native";
import { RadioButton } from "react-native-paper";
import { WorkoutContext } from '../Components/Context.js';
import { styles } from '../Styles/MainStyle.js';

export default function SettingsScreen() {
  const { units, setUnits } = useContext(WorkoutContext);

  return (
    <View style={styles.setting}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Units</Text>
      <RadioButton.Group
        value={units}
        onValueChange={(newValue) => {
          setUnits(newValue);
        }}
      >
        <RadioButton.Item label="Kilometers" value="km" />
        <RadioButton.Item label="Miles" value="mi" />
      </RadioButton.Group>
    </View>
  );
}
