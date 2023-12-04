import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
