import React, { useState } from "react";
import { View,StyleSheet, SafeAreaView, Dimensions,Text, Pressable } from "react-native";
import { Vimeo } from 'react-native-vimeo-iframe';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import moment from "moment";
const VideoPlayer = ({ route,navigation }) => {
const url = route.params.videoLink
const videoID = url.split('/').pop()
//console.log(videoID)
  return (
    <SafeAreaView style={styles.mainContainer}>
    <View style={styles.videoContainer}>
      <Pressable onPress={()=>navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
   
    <Vimeo
        videoId={videoID}// The Vimeo video ID
        params="h=d28901821c&autoplay=1" // Additional parameters like autoplay
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height}
        allowFullScreen={true}
      style={{height:500,width:'100%'}}
      />
       </View>
      <Text style={styles.titleName}>Title: <Text style={styles.subLine}>{route.params.title}</Text></Text>
      <Text style={styles.titleName}>Description: <Text style={styles.subLine}>{route.params.description}</Text></Text>
 <Text style={styles.titleName}>Created at: <Text style={styles.subLine}>{moment(route.params.created).format('DD-MM-YYYY h:mm a ')}</Text></Text>
  <Text style={styles.titleName}>Create on: <Text style={styles.subLine}>{moment(route.params.create).format('DD-MM-YYYY h:mm a ')}</Text></Text>
    </SafeAreaView>
  );
};

export default VideoPlayer;
const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    marginTop: Constants.statusBarHeight,
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },videoContainer:{
    height:500,width:'100%'

  }, titleName: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: "500",
  },  subLine: { fontSize: 15 },
})