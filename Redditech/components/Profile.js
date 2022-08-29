import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Divider, Avatar } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem("userToken").then((token) => {
      fetch("https://oauth.reddit.com/api/v1/me", {
        headers: { Authorization: "Bearer " + token },
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          console.log(data);
          setUser(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.containerProfile}>
          <Image style={styles.photo} source={{ uri: user.snoovatar_img }} />
          <Text>Nickname :</Text>
          <Divider />
          <Text>{user.subreddit.title}</Text>
          <Text>Username : </Text>
          <Text>{user.name}</Text>
          <Text>RedditID : </Text>
          <Text>{user.id}</Text>
          <Divider />
          <Text>Description : </Text>
          <Text>{user.subreddit.public_description}</Text>
          <Divider />
          <Text>URL:</Text>
          <Text>http://reddit.com{user.subreddit.url}</Text>
          <Text> Total of Karmas : </Text>
          <Text>{user.total_karma}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 150,
    width: "100%",
  },
  text: {
    flex: 1,
    flexWrap: "wrap",
    width: "100%",
    color: "black",
    backgroundColor: "lightgrey",
    paddingBottom: 60,
    borderBottomWidth: 4,
    borderBottomColor: "orange",
  },
  containerProfile: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  photo: {
    borderRadius: 100,
    borderColor: "black",
    borderEndWidth: 10,
    height: 150,
    width: 150,
  },

  subReddits: {
    borderBottom: "1px",
    borderBottomColor: "white",
    paddingBottom: 30,
    flexDirection: "row",
  },
});

export { Profile };
