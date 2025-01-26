import { Tabs } from "expo-router";
import { UserCircle, Compass, Send, LocateIcon } from "lucide-react-native";

export default function RootLayout() {
  return (
    <Tabs>
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Compass color={color} size={size} />
          ),
        }}
      />
      {/* Profile Tab */}
      <Tabs.Screen
        name="messages"
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Send color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          tabBarLabel: "Find People",
          tabBarIcon: ({ color, size }) => (
            <LocateIcon color={color} size={size} />
          ),
        }}
      />
      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <UserCircle color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
