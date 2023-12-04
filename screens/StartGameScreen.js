import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InfoText from "../components/ui/InfoText";

export default function StartGameScreen({ onPickedNumber }) {
  const [userInput, setUserInput] = useState("");

  function resetInputHandler() {
    setUserInput("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(userInput);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 100) {
      console.log(chosenNumber);
      Alert.alert("Invalid Number !!", "Number must be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);

      return;
    }
    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InfoText>Enter a number</InfoText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setUserInput(text)}
          value={userInput}
          autoFocus={true}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler} text={"Reset"} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler} text={"Confirm"} />
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
