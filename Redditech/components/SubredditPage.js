import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-paper";

const SubredditPage = ({ route }) => {
  const { subredditName } = route.params;
  const [subReddit, setSubReddit] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("userToken").then((token) => {
      fetch(`https://oauth.reddit.com/r/${subredditName}/about`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          setSubReddit(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);
  return (
    <View>
      <Image style={styles.photo} source={{ uri: subReddit.icon_img }}></Image>
      <Divider/>
      <Text>Subreddit Name : </Text>
      <Text>{subReddit.title}</Text>
      <Divider />
      <Text> Number of subcribers : </Text>
      <Text>{subReddit.subscribers}</Text>
      <Divider />
      <Text>Number of active users:</Text>
      <Text>{subReddit.active_user_count}</Text>
      <Divider/>
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    borderRadius: 100,
    borderColor: "black",
    borderEndWidth: 10,
    height: 75,
    width: 75,
    borderTopColor:'black'
  },
  container: {
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems: 'center'
  },
  container2: {
    display: 'flex',
  }
});

export { SubredditPage };
