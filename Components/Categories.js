import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";

const Categories = ({ navigation }) => {
  const categories = [
    "Entertainment",
    "Environment",
    "Sports",
    "Natural Disasters",
    "Science",
    "Health",
    "Business",
    "Technology",
    "Politics",
    "Travel",
  ];
  return (
    <>
      <ScrollView>
        <View style={tw`p-2`}>
          {categories.map((elem, key) => {
            return (
              <Pressable
                style={tw`p-4 border rounded-md m-2`}
                key={key}
                onPress={() => navigation.navigate("NewsByCategory", {
                    news: elem,
                    navigation: navigation
                })}
              >
                <Text>{elem}</Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default Categories;
