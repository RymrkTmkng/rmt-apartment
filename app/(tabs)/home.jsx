import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { router } from 'expo-router';

export default function Home() {
  const handleLogout = async () => {
    try{
      await signOut(auth);
      Alert.alert("Success","Successfully logged out");
      router.replace("/auth/login");
    }catch(error){
      console.log(error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome back Manager!</Text>
          <Text style={styles.title}>RMT Apartment</Text>
          <Text onPress={handleLogout}>Logout</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🌱 Eco Status</Text>
          <Text style={styles.cardText}>You saved 12 kWh this month</Text>
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionText}>Bills</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionText}>Maintenance</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionText}>Announcements</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionText}>Rooms</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Updates */}
        <Text style={styles.sectionTitle}>Recent Updates</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            ♻️ Garbage collection every Monday & Thursday
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>
            💧 Water maintenance on April 30
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f9f4',
    padding: 20,
  },

  header: {
    marginBottom: 20,
  },

  greeting: {
    fontSize: 16,
    color: '#555',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15,
    color: '#2e7d32',
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  cardTitle: {
    fontWeight: '600',
    marginBottom: 5,
    color: '#2e7d32',
  },

  cardText: {
    color: '#555',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionCard: {
    backgroundColor: '#2e7d32',
    flex: 1,
    padding: 20,
    borderRadius: 12,
    margin: 5,
    alignItems: 'center',
  },

  actionText: {
    color: '#fff',
    fontWeight: '600',
  },
});