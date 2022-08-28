import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Divider, Searchbar, Text } from "react-native-paper";

const SearchPage = () => {
  const [subreddits, setSubreddits] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("userToken").then((token) => {
      fetch("https://oauth.reddit.com/api/search_subreddits", {
        method: "POST",
        body: new URLSearchParams({ query: search }).toString(),
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          console.log(data.subreddits);
          setSubreddits(data.subreddits);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [search]);

  return (
    <View>
      <Searchbar
        placeholder="Search a subreddit..."
        onChangeText={(text) => {
          setSearch(text);
        }}
      />
      <ScrollView>
        {subreddits.map((subreddit, key) => (
          <View>
            <Image
              style={styles.photo}
              source={{ uri: subreddit.icon_img }}
            ></Image>
            <Text>Title of Subreddit :</Text>
            <Text>{subreddit.name}</Text>
            <Text>Subscriber count : </Text>
            <Text>{subreddit.subscriber_count}</Text>
            <Text>Number of active users: </Text>
            <Text>{subreddit.active_user_count}</Text>
            <Divider />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    borderRadius: 100,
    borderColor: "black",
    borderEndWidth: 10,
    height: 150,
    width: 150,
  },
});
export { SearchPage };
