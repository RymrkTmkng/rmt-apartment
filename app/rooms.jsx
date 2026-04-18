import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RoomScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Room Details</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Room Number: 101</Text>
        <Text style={styles.text}>Monthly Rent: ₱5,000</Text>
        <Text style={styles.text}>Status: Occupied</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.text}>🌿 Eco Features:</Text>
        <Text style={styles.text}>• Natural ventilation</Text>
        <Text style={styles.text}>• Energy-efficient lighting</Text>
        <Text style={styles.text}>• Green surroundings</Text>
      </View>
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
    marginBottom: 15,
  },
  text: { fontSize: 16, marginBottom: 5 },
});