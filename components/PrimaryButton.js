import { View, Text, Pressable, StyleSheet, Touchable } from "react-native";

export default function PrimaryButton({ text }) {
  function handlePress() {
    console.log("Pressed");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: "#640233" }}
        style={(pressed) => {
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer;
        }}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
