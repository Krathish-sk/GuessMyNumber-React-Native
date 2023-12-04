import { View, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ text, color }) {
  return (
    <View>
      <Text style={{ color: color }}>{text}</Text>
    </View>
  );
}
