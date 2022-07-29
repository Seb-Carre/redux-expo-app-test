import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { apiCall, apiFailed } from "./store/api";
import store from "./store/configureStore";
import { addFeature, deleteFeature, getSearchFeature } from "./store/features";
import { addFeatureToMember, addMember } from "./store/members";

store.dispatch(
  apiCall({
    url: "/bugs",
    onSuccess: "bugsReceived",
  })
);

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
