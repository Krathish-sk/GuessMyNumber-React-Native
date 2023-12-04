import { View, Text, Pressable, StyleSheet, Touchable } from "react-native";

export default function PrimaryButton({ text, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
        style={(pressed) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
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
