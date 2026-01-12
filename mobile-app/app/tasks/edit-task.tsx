import { View, Text, StyleSheet } from "react-native";

export default function EditTaskScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit Task Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0E6",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#6B5E4B",
  },
});
