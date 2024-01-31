import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { MD3LightTheme, Provider } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? Constants.statusBarHeight + 5 : 0,
        borderWidth: 2,
        margin: 10,
        padding: 10,

        borderRadius: 10,
    },
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    Flatlist: {
        flex: 1,
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
});

export { styles };
