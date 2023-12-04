import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary700,
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
});
