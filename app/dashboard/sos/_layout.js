import { Tabs, Stack } from "expo-router";
import { Appearance, View } from "react-native";
import { Icon } from "@rneui/themed";

import sos from "./sos";

function _layout() {
  return (
<Stack screenOptions={{
        headerShown: false,
    }}/>
  )
}

export default _layout