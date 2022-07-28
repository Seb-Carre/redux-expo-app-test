import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import store from "./store/configureStore";
import { addFeature, deleteFeature, getSearchFeature } from "./store/features";
import { addFeatureToMember, addMember } from "./store/members";

store.dispatch((dispatch, getState) => {
  dispatch({ type: "addFeature", payload: { name: "Xnox" } });
  console.log("[" + 32 + "m" + "getState : " + "[0m", getState);
});

export default function App() {
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
