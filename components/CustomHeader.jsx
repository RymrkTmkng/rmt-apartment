import { View, Text } from "react-native";
import CustomImage from "./CustomImage";
import Logo from "../assets/rmt-apartment.png";

export default function CustomHeader() {
  return (
    <View
      style={{
        height: 100,
        flexDirection: "col",
        alignItems: "center",
        justifyContent:"center",
        paddingHorizontal: 10,
        backgroundColor: "#0a0a0a",
      }}
    >
      <CustomImage
        source={Logo}
        resizeMode="contain"
        style={{ width: 100, height: 50 }}
      />

      <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
        APARTMENT
      </Text>
    </View>
  );
}