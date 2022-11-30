import { Text, View } from "../components/Themed";
import { Button, TextInput } from "react-native";
import { RootTabScreenProps } from "../types";
import React from "react";
import { Formik } from "formik";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View className="w-full h-full items-center ">
          <View className="gap-4 max-w-xl m-4">
            <View className="shadow-xl">
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType={"email-address"}
              />
            </View>
            <View className="shadow-xl">
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                keyboardType={"visible-password"}
              />
            </View>
            <View className="shadow-xl">
              <Button
                onPress={() => {
                  handleSubmit();
                }}
                title="Submit"
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}
