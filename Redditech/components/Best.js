import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
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
            <View style={styles.post} key={key}>
                <Text style={styles.author}>
                    Published by {post.data.author}
                </Text>
                <Text style={styles.title}>
                  {post.data.title}
                </Text>
                {post.data.thumbnail.length > 10 && (
                    <Image
                        style={styles.thumbnail}
                        source={{
                            uri: post.data.thumbnail
                        }}
                    />
                )}
                <View style={styles.postDetail}>
                    <Text>
                      Upvotes : {post.data.ups}
                    </Text>
                    <Text>
                      Comments : {post.data.num_comments}
                    </Text>
                </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {},
  author: {
    marginTop: 5,
    marginLeft: 20,
    fontStyle: 'italic'
  },
  title: {
    textAlign: 'center',
    marginVertical: 25
  },
  subReddits: {
    borderBottom: "1px",
    borderBottomColor: "white",
    paddingBottom: 30,
    flexDirection: "row",
  },
  postDetail: {
  flexDirection: "row",
  justifyContent: 'space-between',
  marginHorizontal: 20,
  marginBottom: 5
  },
  post: {
    backgroundColor: '#DAE0E6',
    margin: 10,
    borderRadius: 20
  },
  thumbnail: {
     width: 150,
     height: 100,
     marginLeft: 'auto',
     marginRight: 'auto',
     marginTop: 5,
     marginBottom: 15
  }
});

export { Best };
