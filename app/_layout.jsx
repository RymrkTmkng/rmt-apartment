import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          sceneStyle: styles.defView,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "black",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="tools"
          options={{
            title: "Tools",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "library" : "library-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="rooms"
          options={{
            title: "Rooms",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "bed" : "bed-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="billing"
          options={{
            title: "Bill",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "newspaper" : "newspaper-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        /> 
      </Tabs>
    </SafeAreaProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  defView: {
    backgroundColor: "#fff",
  },
});
