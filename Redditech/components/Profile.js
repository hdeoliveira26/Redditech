import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Divider, Avatar} from "react-native-paper";

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
        <View>
            <Avatar.Image source={user.icon_img}></Avatar.Image>
            <Text>username : </Text>
            <Text>{user.name}</Text>
            <Divider/>
            <Text>Description : </Text>
            <Text>{user.public_description}</Text>

        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
  subReddits: {
    borderBottom: "1px",
    borderBottomColor: "white",
    paddingBottom: 30,
    flexDirection: "row",
  },
});

export { Profile };
