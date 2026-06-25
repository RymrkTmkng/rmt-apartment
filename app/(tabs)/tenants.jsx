import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../lib/firebase";
import {
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  collection,
  getDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function TenantScreen() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [rent, setRent] = useState("");
  const [editName, setEditName] = useState("");
  const [editRoom, setEditRoom] = useState("");
  const [editRent, setEditRent] = useState("");
  const [tenants, setTenants] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState(null);

    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, "tenants"), (snapshot) => {
        const tenantsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTenants(tenantsList);
      });

      return () => unsubscribe();
    }, []);

  const getTenants = async () => {
    try {
      const query = await getDocs(collection(db, "tenants"));

      const tenantsList = query.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTenants(tenantsList);
    } catch (error) {
      console.log(error);
    }
  };

  const addTenant = async () => {
    try {
      await addDoc(collection(db, "tenants"), {
        name: name,
        room: room,
        rent: rent,
        dateAdded: new Date(),
      });

      
      Alert.alert("Tenant Added!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const editModal = (item) => {
    setSelectedTenant(item);
    setEditName(item.name);
    setEditRoom(item.room);
    setEditRent(String(item.rent));
    setModalVisible(true);
  };

  const updateTenant = async () => {
    try {
      await updateDoc(doc(db, "tenants", selectedTenant.id), {
        name: editName,
        room: editRoom,
        rent: editRent,
      });

      setModalVisible(false);
      setSelectedTenant(null);
      

      Alert.alert("Update Successful!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const deleteTenant = async (id) => {
    try {
      await deleteDoc(doc(db, "tenants", id));
      Alert.alert("Deleted Successfully!");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tenant Dashboard</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Tenant Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Room"
          style={styles.input}
          value={room}
          onChangeText={setRoom}
        />
        <TextInput
          placeholder="Rent"
          style={styles.input}
          value={rent}
          onChangeText={setRent}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.addButton} onPress={addTenant}>
          <Text style={styles.buttonText}>Add Tenant</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tenants}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No tenants yet</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Name: {item?.name || ""}</Text>
            <Text>Room: {item?.room || ""}</Text>
            <Text>Rent: {item?.rent || ""}</Text>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.updateBtn}
                onPress={() => {
                  editModal(item);
                }}
              >
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => {
                  deleteTenant(item.id);
                }}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Edit Tenant</Text>

            <TextInput
              placeholder="Tenant Name"
              style={styles.input}
              value={editName}
              onChangeText={setEditName}
            />

            <TextInput
              placeholder="Room"
              style={styles.input}
              value={editRoom}
              onChangeText={setEditRoom}
            />

            <TextInput
              placeholder="Rent"
              style={styles.input}
              value={editRent}
              onChangeText={setEditRent}
            />

            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.saveBtn} onPress={updateTenant}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 15,
  },

  form: {
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: "#2e7d32",
    padding: 12,
    borderRadius: 10,
  },

  card: {
    backgroundColor: "#f1f8f4",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  updateBtn: {
    backgroundColor: "#0288d1",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
  },

  deleteBtn: {
    backgroundColor: "#d32f2f",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "#777",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    maxHeight: "100%",
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },

  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    gap: 10,
  },

  saveBtn: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },

  cancelBtn: {
    backgroundColor: "gray",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
});
