import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import store from "./store/configureStore";
import { addFeature } from "./store/feature";

export default function App() {
  store.dispatch(addFeature({ name: "Xbox" }));

  console.log("[" + 32 + "m" + "store : " + "[0m", store.getState());
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
