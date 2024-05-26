import React, { useEffect, useRef, useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  TextInput,
  Animated,
  PanResponder,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import dispatchConstant from "../../reduxSaga/dispatchConstant";
import { VideoData } from "../../reduxState";
import config from "../../config";
import { AntDesign } from "@expo/vector-icons";
import { AppLoader } from "../../Component";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const videoListapi = () => {
    dispatch({ type: dispatchConstant.VIDEO_LIST });
  };
  useEffect(() => {
    videoListapi();
  }, []);

  const dataVideo = useSelector(VideoData.selectVideo);
  console.log("datavideo", JSON.stringify(dataVideo));

  //for searchBar
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Function to handle search
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = data
      .map((section) => {
        const filteredItems = section.data.filter((item) =>
          item.p_name.toLowerCase().includes(text.toLowerCase())
        );
        return { ...section, data: filteredItems };
      })
      .filter((section) => section.data.length > 0);
    setFilteredData(filtered);

  };

  useEffect(() => {
    setData(dataVideo);
    setFilteredData(dataVideo);
  }, []);

  //Add animation
  const [isFocused, setIsFocused] = useState(false);
  const searchWidth = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(searchWidth, {
      toValue: 300,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(searchWidth, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  //animation on title
  const position = new Animated.ValueXY({ x: 0, y: 0 });

  const rotatex = position.x.interpolate({
    inputRange: [0, 50],
    outputRange: ["0deg", "360deg"],
  });
  const rotatey = position.y.interpolate({
    inputRange: [0, 50],
    outputRange: ["0deg", "360deg"],
  });

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: position.x, dy: position.y },
    ]),
    onPanResponderRelease:()=>{
      Animated.spring(position,{
        toValue:{x:0,y:0}
      }).start()
    }
  });

  const renderItem = ({ item }) => {
    return (
      <View style={styles.videoContainer}>
        <TouchableOpacity
          onPress={() =>
          (
            navigation.navigate(config.routes.VIDEO_PLAYER, {
              videoLink: item.url,
              title: item.p_name,
              description: item.p_desc,
              created: item.created_at,
              create: item.create_at,
            }))
                 // Clear the search bar

              
            
          }
          
        >
          <Image source={{ uri: item.p_image }} style={styles.imageStyle} />
        
        <Text style={styles.titleName}>
          Title: <Text style={styles.subLine}>{item.p_name}</Text>
        </Text>
        <Text style={styles.titleName}>
          Discription: <Text style={styles.subLine}> {item.p_desc}</Text>
        </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <View>
          {isFocused === false ? (
            <Animated.Text   {...pan.panHandlers} style={[styles.title,{ transform: [
              { translateX: position.x },
              { translateY: position.y },
              { rotate: rotatex },
              { rotate: rotatey },
            ],}]}>BOUBOULENA CREATIVE</Animated.Text>
          ) : null} 
        </View>
        {isFocused ? (
          <Animated.View
            style={[styles.containerTopBar, { width: searchWidth }]}
          >
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchText}
              onChangeText={handleSearch}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Animated.View>
        ) : (
          <Animated.View
            style={[styles.containerTopBar1, { width: searchWidth }]}
          >
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchText}
              onChangeText={handleSearch}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Animated.View>
        )}

        <View>
          <TouchableOpacity
            onPress={() => {
              if (isFocused) {
                handleBlur();
              } else {
                handleFocus();
          
              }
            }}
          >
            {isFocused ? (
              <AntDesign name="close" size={24} color="white" />
            ) : (
              <EvilIcons name="search" size={28} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <SectionList
          sections={filteredData}
          renderItem={renderItem}
          stickySectionHeadersEnabled={true}
          keyExtractor={(item, index) => item.p_id.toString() + index}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>{title}</Text>
            </View>
          )}
        />
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "white",
  },
  containerTopBar1: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,

    borderRadius: 20,
    backgroundColor: "black",
  },
  image: {
    height: 30,
    width: 140,
  },
  videoContainer: {
    width: "100%",
    marginTop: 20,
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  heading: {
    fontSize: 15,
    marginTop: 10,
    marginHorizontal: 10,
    fontWeight: "600",
  },
  headingContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
  },
  titleName: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: "500",
  },
  subLine: { fontSize: 15 },
  textInputStyle: {
    paddingLeft: 10,
    backgroundColor: "white",
  },
  searchInput: {
    width: "90%",
    height: "80%",
  },
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: "black",
    marginTop: 40,
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent:'space-between'
  },
  title: {
    fontWeight: "600",
   
    fontSize: 15,
    color: "white",
  },
});
