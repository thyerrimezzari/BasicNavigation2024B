import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DetailsScreen } from "./screens/DetailsScreem";
import { HomeScreen } from "./screens/HomeScreen";
import { MoviesScreen } from "./screens/MoviesScreen";

const Stack = createNativeStackNavigator();

async function getMovies(){
  const response = await fetch('http://www.omdbapi.com/?s=spider%20man&apikey=1cd66749');
  console.log(response);
}

export default function App() {

  getMovies();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
