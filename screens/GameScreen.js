import { View, Text, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

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

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton
            onPress={nextGuessHandler.bind(this, "greater")}
            text={"+"}
          />
          <PrimaryButton
            onPress={nextGuessHandler.bind(this, "lower")}
            text={"-"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
