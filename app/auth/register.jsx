import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { setDoc, doc } from "firebase/firestore";

export default function RegisterScreen() {
  const router = useRouter();
  const [loading,setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordCheck = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }

    if (!/[A-Z]/.test(password)) {
      return "Password must include an uppercase letter";
    }

    if (!/[0-9]/.test(password)) {
      return "Password must include a number";
    }

    return null;
  };

  const registerUser = async () => {
    const error = passwordCheck(password);

    if (error) {
      Alert.alert("Invalid Password",error);
    } else {
      try {
        setLoading(true);
        const userCreds = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

       const user = userCreds.user;

       await setDoc(doc(db,"users",user.uid),{
        email: user.email,
        name: name,
        createdAt: new Date(),
       });

        Alert.alert("Success", "Registered Successfuly!");
      } catch (err) {
        Alert.alert("Registration Failed", err.message);
      }finally{
        setLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={[styles.button,loading && {opacity:0.5}]} onPress={registerUser}>
        <Text style={styles.buttonText}>
          {loading ? "Registering...." : "Register"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.link} onPress={() => router.push("/auth/login")}>
        Already have an account? Login
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2e7d32",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", textAlign: "center" },
  link: { marginTop: 15, color: "#2e7d32", textAlign: "center" },
});
