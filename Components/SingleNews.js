import { Text, View, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";

const SingleNewsScreen = ({ route }) => {
  const { itemId } = route.params;
  const [news, setNews] = useState(null);
  const [loading, isLoading] = useState(true);
  const fetchNews = async () => {
    try {
      const resp = await fetch(`http://192.168.1.6:5050/${itemId}`);
      const data = await resp.json();
      setNews(data.news);
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
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={tw`p-2`}>
          <ScrollView>
          <View>
            <Text style={tw`font-bold text-2xl mb-4`}>{news.title}</Text>
            <View style={tw`flex-row w-full justify-between mb-4`}>
              <Text style={tw`font-semibold text-sm`}>Writer: <Text>{news.writer}</Text></Text>
              <Text style={tw`font-semibold text-sm`}>
                {setDate(news.createdAt)}
              </Text>
            </View>
            <Image
              style={tw`w-full h-56 mb-4`}
              source={{
                uri: news.image,
              }}
              resizeMode="cover"
            />
            <Text style={tw`font-semibold text-sm text-center mb-4`}>Category: {news.category}</Text>
            <Text style={tw`text-lg`}>{news.description}</Text>
          </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default SingleNewsScreen;
