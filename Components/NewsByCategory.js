import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import tw from "tailwind-react-native-classnames";

const NewsByCategory = ({ route }) => {
  const [newsByCat, setNewsByCat] = useState(null);
  const [loading, isLoading] = useState(true);
  const { news, navigation } = route.params;
  async function getNewsByCat(cat) {
    if (cat === "" || cat === " " || cat === null) {
      alert("Please enter category.");
      return;
    }
    const news = await fetch(`http://192.168.100.148:5050/category/${cat}`);
    const receivedNewsByCategory = await news.json();
    setNewsByCat(receivedNewsByCategory);
    isLoading(false);
  }
  useEffect(() => {
    getNewsByCat(news);
  }, []);
  return (
    <>
      {news.length === 0 ? (
        <Text style={tw`text-lg font-bold text-center`}>No News Found in this category.</Text>
      ) : loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.layout}>
          <FlatList
            data={newsByCat}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Pressable
                key={item._id}
                style={[styles.card]}
                onPress={() =>
                  navigation.navigate("SingleNews", {
                    itemId: item._id,
                  })
                }
              >
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
                  <Text>
                    Written by: <Text style={tw`font-bold`}>{item.writer}</Text>
                  </Text>
                </View>
              </Pressable>
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
  flat: {
    width: "100%",
  },
  imageLayout: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 150,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 350,
    marginVertical: 10,
    gap: 10,
    marginLeft: 15,
  },
  elevation: {
    elevation: 10,
    shadowColor: "grey",
  },
});

export default NewsByCategory;
