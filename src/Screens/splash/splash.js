import React, { useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";
import { youtubeIcon } from "../../assests/images";
import config from "../../config";
import { StackActions } from "@react-navigation/native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace(config.routes.HOME));
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>BOUBOULENA CREATIVE</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#DBB5B5'
  },
  container: {
    height: 50,
    width: "99%",
    borderWidth: 5,
    backgroundColor: "black",
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 120,
    width: 120,
  },
  title: {
    color: "white",
  },
});
