import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Repositorie from "./pages/Repositorie";
import Star from "./pages/Star";
import Follower from "./pages/Follower";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Repositorie" component={Repositorie} />
        <AppStack.Screen name="Star" component={Star} />
        <AppStack.Screen name="Follower" component={Follower} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}
