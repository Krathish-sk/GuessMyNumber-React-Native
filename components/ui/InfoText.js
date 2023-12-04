import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function InfoText({ children, style }) {
  return <Text style={[styles.infoText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  infoText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: Colors.accent500,
    width: "100%",
    textAlign: "center",
  },
});
