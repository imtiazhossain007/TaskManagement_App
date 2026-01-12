import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useCallback, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useFocusEffect } from "expo-router";
import {
  fetchTasks,
  updateTask,
  deleteTask,
} from "../../services/task.service";
import { useAuth } from "../../context/AuthContext";

export default function DashboardScreen() {
  const { token } = useAuth();
  const router = useRouter();
  const [tasks, setTasks] = useState<any[]>([]);

  const loadTasks = async () => {
    if (!token) return;
    const data = await fetchTasks(token);
    setTasks(data);
  };

  // 🔥 THIS IS THE KEY FIX
  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, [token])
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("/tasks/add-task")}
        >
          <Ionicons name="add" size={26} color="#3E3A32" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet</Text>
        }
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              item.status === "completed" && styles.completedCard,
            ]}
          >
            {/* Radio button */}
            <TouchableOpacity
              onPress={async () => {
                await updateTask(token!, item._id, {
                  status:
                    item.status === "completed"
                      ? "pending"
                      : "completed",
                });
                loadTasks();
              }}
            >
              <Ionicons
                name={
                  item.status === "completed"
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                size={24}
                color="#C1A57B"
              />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.taskTitle}>{item.title}</Text>

            {/* Delete */}
            <TouchableOpacity
              onPress={async () => {
                await deleteTask(token!, item._id);
                loadTasks();
              }}
            >
              <Ionicons
                name="trash-outline"
                size={22}
                color="#8B5E3C"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0E6",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#3E3A32",
  },
  addButton: {
    backgroundColor: "#FAF7F2",
    padding: 10,
    borderRadius: 20,
  },
  empty: {
    textAlign: "center",
    color: "#6B5E4B",
    marginTop: 40,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAF7F2",
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E4DCCF",
    gap: 12,
  },
  completedCard: {
    opacity: 0.5,
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
    color: "#3E3A32",
  },
});
