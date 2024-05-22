import React, { useEffect } from "react";
import { View, SafeAreaView, Image, StyleSheet } from "react-native";
import { youtubeHome } from "../../assests/images";
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import dispatchConstant from "../../reduxSaga/dispatchConstant";
const Home = () => {
  const dispatch = useDispatch();

  const videoListapi = () => {
    dispatch({ type: dispatchConstant.VIDEO_LIST });
  };

  useEffect(() => {
    videoListapi();
  });
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.containerTopBar}>
        <View>
          <Image source={youtubeHome} style={styles.image} />
        </View>
        <View>
          <EvilIcons name="search" size={28} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  containerTopBar: {
    width: "100%",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  image: {
    height: 30,
    width: 140,
  },
});
