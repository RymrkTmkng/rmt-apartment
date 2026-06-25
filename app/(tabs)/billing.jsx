import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BillingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Billing Overview</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Room: 101</Text>
        <Text style={styles.label}>Monthly Rent: ₱5,000</Text>
        <Text style={styles.label}>Due Date: May 5, 2026</Text>

        <View style={styles.statusContainer}>
          <Text style={styles.status}>Status: Unpaid</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.back()}
      >
        <Text style={styles.secondaryText}>Back</Text>
      </TouchableOpacity>
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
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  label: { fontSize: 16, marginBottom: 8 },
  statusContainer: {
    marginTop: 10,
    backgroundColor: '#ffebee',
    padding: 10,
    borderRadius: 10,
  },
  status: { color: '#c62828', fontWeight: '600' },
  button: {
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
  secondaryButton: {
    marginTop: 10,
    padding: 12,
  },
  secondaryText: {
    textAlign: 'center',
    color: '#2e7d32',
  },
});