import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function Login() {
  return (
    <View className="bg-blue-400">
      <Text>Login</Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/Login.tsx" />
    </View>
  );
}
