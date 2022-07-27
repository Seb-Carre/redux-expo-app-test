import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import store from "./store/configureStore";
import { addFeature, deleteFeature, getSearchFeature } from "./store/features";
import { addFeatureToMember, addMember } from "./store/members";

store.dispatch(addFeature({ name: "Xbox" }));
//store.dispatch(deleteFeature({ name: "Xbox" }));

store.dispatch(addMember({ memberName: "Eric" }));

console.log("[" + 32 + "m" + "store : " + "[0m", store.getState());

//console.log("[" + 32 + "m" + "state : " + "[0m", getSearchFeature(store));
store.dispatch(addFeatureToMember({ feature: "Coat" }));

console.log(
  "[" + 32 + "m" + "store : " + "[0m",
  store.getState().entities.members
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
