import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import config from "../config";
import { Home, Splash, VideoPlayer } from "../Screens";

const Stack = createNativeStackNavigator();

export default function rootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={config.routes.SPLASH} component={Splash} />
        <Stack.Screen name={config.routes.HOME} component={Home} />
        <Stack.Screen name={config.routes.VIDEO_PLAYER} component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
