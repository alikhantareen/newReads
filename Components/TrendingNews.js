import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { Card, Button } from "@rneui/themed";
import { useState, useEffect } from "react";
import Header from "./Header";
import tw from "tailwind-react-native-classnames";

const TrendingNews = () => {
  const [allNews, setAllNews] = useState(null);
  const [loading, isLoading] = useState(true);
  const fetchNews = async () => {
    try {
      const resp = await fetch("http://192.168.1.6:5050/");
      const data = await resp.json();
      setAllNews(data.news.slice(0,3));
      isLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  function setDate(d) {
    let date = new Date(d);
    return date.toLocaleString();
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Text style={tw`font-bold text-2xl p-2`}>Top Trending</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
          <FlatList
            horizontal
            data={allNews}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View key={item._id} style={[styles.card, styles.elevation]}>
                <View style={styles.imageLayout}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.image,
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View>
                  <Text style={tw`font-bold`}>{item.title}</Text>
                  <Text>Written by: <Text style={tw`font-bold`}>{item.writer}</Text></Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  imageLayout: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 100,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 350,
    marginVertical: 10,
    gap: 10,
    margin: 5,
    height: 'auto',
  },
  elevation: {
    elevation: 10,
    shadowColor: "grey",
  },
});

export default TrendingNews;