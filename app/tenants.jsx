import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TenantScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tenant Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name: Juan Dela Cruz</Text>
        <Text style={styles.label}>Status: Active Tenant</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/room')}
      >
        <Text style={styles.buttonText}>View Room</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2e7d32', marginBottom: 20 },
  card: {
    backgroundColor: '#f1f8f4',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: { fontSize: 16, marginBottom: 5 },
  button: {
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: { color: '#fff', textAlign: 'center' },
});