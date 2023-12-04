import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
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

    console.log(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler} text={"Reset"} />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler} text={"Confirm"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#4e0329",
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
