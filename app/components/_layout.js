import { Tabs, Stack } from "expo-router";
import { Appearance, View } from "react-native";
import { Icon } from "@rneui/themed";

import MapContainer from "./MapUser";

function _layout() {
  return (
    <Stack.Screen name="MapUser" component={MapContainer} screenOptions={{
        headerShown: false,
    }} />
  )
}

export default _layout