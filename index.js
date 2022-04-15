// @ts-check
import { registerRootComponent } from "expo"
import { Platform } from "react-native"
import { AvoidSoftInput } from "react-native-avoid-softinput"

if (Platform.OS === "android") {
  AvoidSoftInput.setAdjustNothing()
}

AvoidSoftInput.setEnabled(false)

import App from "./App"

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
