import React, { useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { youtubeIcon } from "../../assests/images";
import config from "../../config";
import { StackActions } from "@react-navigation/native";

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
          navigation.dispatch(
            StackActions.replace(config.routes.HOME)
          );
        }, 3000);
      }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={youtubeIcon} style={styles.imageContainer} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
    
  },
  imageContainer: {
    height:120,
    width:120,

  },
});
