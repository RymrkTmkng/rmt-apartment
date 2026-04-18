import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ToolsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tools & Services</Text>

      <View style={styles.card}>
        <TouchableOpacity style={styles.toolItem}>
          <Text style={styles.toolText}>🔧 Request Repair</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.toolItem}>
          <Text style={styles.toolText}>📞 Contact Landlord</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.toolItem}>
          <Text style={styles.toolText}>📜 House Rules</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.toolItem}>
          <Text style={styles.toolText}>📍 Apartment Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.toolItem}>
          <Text style={styles.toolText}>🌿 Eco Tips</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f1f8f4',
    borderRadius: 15,
    padding: 10,
  },
  toolItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  toolText: {
    fontSize: 16,
    color: '#333',
  },
});