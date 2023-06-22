import { Tabs, Stack } from "expo-router";
import { Appearance, View } from "react-native";
import { Icon } from "@rneui/themed";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          // headerTransparent: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
          tabBarLabelStyle: { fontSize: 11.5 },
          
        }}
      />
      <Tabs.Screen
        name="History"
        options={{

          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Icon name="history" color={color} />,
          tabBarLabelStyle: { fontSize: 11.5 },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="user" type="font-awesome" color={color} />
          ),
          tabBarLabelStyle: { fontSize: 11.5 },
        }}
      />
    </Tabs>
  );
}
