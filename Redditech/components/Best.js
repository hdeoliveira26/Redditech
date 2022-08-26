import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

const Best = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("userToken").then((token) => {
      fetch("https://oauth.reddit.com/best", {
        headers: { Authorization: "Bearer " + token },
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          console.log(data.data.children[0].data.title);
          setPosts(data.data.children);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subReddits}>
        <ScrollView>
          {posts.map((post, key) => (
            <Text key={key} style={styles.text}>
              {post.data.title}
            </Text>
          ))}
        </ScrollView>
      </View>
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

export { Best };
