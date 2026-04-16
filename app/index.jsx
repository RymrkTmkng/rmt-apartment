import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader"
import CustomHeroBanner from "../components/CustomHeroBanner"
import bannerImage from "../assets/room-key.jpg"

const Homepage = () => {
  return (
    <SafeAreaView>
      <CustomHeader/>
      <CustomHeroBanner image={bannerImage} heading="Welcome Back Admin" containerStyle={{height:150}}/>
      <View>
        <Text>Admin</Text>
      </View>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
