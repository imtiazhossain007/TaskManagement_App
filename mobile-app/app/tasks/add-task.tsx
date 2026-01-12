import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { createTask } from "../../services/task.service";
import { useAuth } from "../../context/AuthContext";

export default function AddTaskScreen() {
  const { token } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState("");

  const handleAdd = async () => {
    if (!title || !token) return;
    await createTask(token, { title, priority: "medium" });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>

      <TextInput
        style={styles.input}
        placeholder="Task title"
        value={title}
        onChangeText={setTitle}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0E6",
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: "#3E3A32",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FAF7F2",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E4DCCF",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#C1A57B",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#3E3A32",
    fontWeight: "600",
  },
});
