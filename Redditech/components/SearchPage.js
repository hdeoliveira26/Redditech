import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Divider, Searchbar, Text } from "react-native-paper";

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
      <View>
        <Text> Subreddit : </Text>
        {subreddits.map((subreddit, key) => {
          <Text>{subreddit.name}</Text>;
        })}
      </View>
    </View>
  );
};

export { SearchPage };
