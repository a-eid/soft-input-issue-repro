import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { TextInput } from "react-native-gesture-handler"
import { AvoidSoftInputView } from "react-native-avoid-softinput"

const stack = createNativeStackNavigator()

function Home({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }} onPress={() => navigation.navigate("modal")}>
        Home
      </Text>
    </View>
  )
}

function Modal() {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <AvoidSoftInputView style={{ padding: 20, backgroundColor: "blue" }} avoidOffset={20}>
        <TextInput style={{ backgroundColor: "red", height: 45, paddingHorizontal: 20 }} />
      </AvoidSoftInputView>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {/* @ts-ignore */}
      <stack.Navigator screenOptions={{ headerTopInsetEnabled: false }}>
        <stack.Screen name="home" component={Home} />
        <stack.Screen
          name="modal"
          component={Modal}
          options={{
            stackPresentation: "transparentModal",
            headerShown: false,
            contentStyle: {
              backgroundColor: "rgba(0,0,0, 0.6)",
              flex: 1,
              justifyContent: "flex-end",
            },
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
