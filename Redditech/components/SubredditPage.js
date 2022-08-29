import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Divider } from "react-native-paper";

const SubredditPage = ({ route }) => {
  const { subredditName } = route.params;
  const [subReddit, setSubReddit] = useState([]);

  const subscribe = () => {
    AsyncStorage.getItem("userToken").then((token) => {
      fetch('https://oauth.reddit.com/api/subscribe'),{
        body: {action: 'sub'},
        method: 'POST',
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const unsubscribe = () => {
    AsyncStorage.getItem("userToken").then((token) => {
      fetch('https://oauth.reddit.com/api/subscribe'),{
        body: {action: 'unsub'},
        method: 'POST',
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

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
          console.log(data);
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
      <Text>{subReddit.user_is_subscriber?<Button onPress={unsubscribe}>Unsubscribe</Button>:<Button onPress={subscribe}>Subscribe</Button>}</Text>

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

export { SubredditPage};
