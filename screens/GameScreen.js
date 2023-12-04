import { View, Text, StyleSheet } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Game Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
