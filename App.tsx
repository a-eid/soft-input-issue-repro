import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import { AvoidSoftInputView } from "react-native-avoid-softinput"

const stack = createNativeStackNavigator()

function Home({ navigation }: any) {
  return (
    <AvoidSoftInputView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={{ fontSize: 40, textAlign: "center" }} onPress={() => navigation.navigate("modal")}>
          Home
        </Text>
        <TextInput style={{ height: 50, marginBottom: 20, backgroundColor: "blue" }} />
        <TextInput style={{ height: 50, marginBottom: 20, backgroundColor: "blue" }} />
        <TextInput style={{ height: 50, marginBottom: 20, backgroundColor: "blue" }} />
        <TextInput style={{ height: 50, marginBottom: 20, backgroundColor: "blue" }} />
        <TextInput style={{ height: 50, marginBottom: 20, backgroundColor: "blue" }} />
        <View style={{ height: 50, backgroundColor: "red", marginTop: "auto" }}></View>
      </ScrollView>
    </AvoidSoftInputView>
  )
}

function Modal() {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <TextInput style={{ backgroundColor: "red", height: 45, paddingHorizontal: 20 }} />
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
