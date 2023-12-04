import { View, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InfoText from "../components/ui/InfoText";

function genreateRandomNumber(min, max, exclude) {
  const num = Math.floor(Math.random() * (max - min)) + min;

  if (num === exclude) {
    return genreateRandomNumber(min, max, exclude);
  } else return num;
}

let minBoundry = 1;
let maxBoundry = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = genreateRandomNumber(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [userNumber, currentGuess, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess <= userNumber) ||
      (direction === "greater" && currentGuess >= userNumber)
    ) {
      Alert.alert("Don't Lie", "You know that this is wrong...", [
        { text: "Sorry", style: "default" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    const newNumber = genreateRandomNumber(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newNumber);
  }

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InfoText style={styles.infoText}>Hiegher or Lower</InfoText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, "lower")}
              text={"-"}
            >
              <Ionicons color="white" name="md-remove" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  infoText: { marginBottom: 12 },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
