import { Image, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";

export default function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone need <Text style={styles.heightLight}>X</Text> rounds to
          guess the number <Text style={styles.heightLight}>Y</Text>.
        </Text>
        <PrimaryButton onPress>New GAME</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    width: 300,
    height: 300,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
  heightLight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
