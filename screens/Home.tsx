import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View className="bg-red-700 p-10">
      <Text >Home</Text>
      
      <EditScreenInfo path="/screens/Home.tsx" />
    </View>
  );
}

