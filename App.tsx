import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useCachedResources from "./hooks/useCachedResources";
import DeleteUser from "./screens/DeleteUser";
import HomeScreen from "./screens/HomeScreen";
import RegisterUser from "./screens/RegisterUser";
import UpdateUser from "./screens/UpdateUser";
import ViewAllUser from "./screens/ViewAllUser";
import ViewUser from "./screens/ViewUser";

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home Screen", //Set Header Title
              headerStyle: {
                backgroundColor: "#f4511e", //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterUser}
            options={{
              title: "Register User", //Set Header Title
              headerStyle: {
                backgroundColor: "#f4511e", //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />

          <Stack.Screen
            name="Update"
            component={UpdateUser}
            options={{
              title: "Update User", //Set Header Title
              headerStyle: {
                backgroundColor: "#f4511e", //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="View"
            component={ViewUser}
            options={{
              title: "View User", //Set Header Title
              headerStyle: {
                backgroundColor: "#f4511e", //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="ViewAll"
            component={ViewAllUser}
            options={{
              title: "View Users", //Set Header Title
              headerStyle: {
                backgroundColor: "#f4511e", //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="Delete"
            component={DeleteUser}
            options={{
              title: "View Users", //Set Header Title
              headerStyle: {
                backgroundColor: "#f4511e", //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
