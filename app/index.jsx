import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader"

const Homepage = () => {
  return (
    <SafeAreaView>
      <CustomHeader/>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
